import {Animated, Dimensions, FlatList, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Movie} from '../../types/movie';
import {NativeImage} from '../../components';
import {useTheme} from '../../hooks';

const {width, height} = Dimensions.get('screen');

type Props = {
  data: Movie[] | undefined;
  scrollX: React.MutableRefObject<Animated.Value>;
};

const BackgroundDrop = ({data, scrollX}: Props) => {
  const {theme} = useTheme();

  const calculateTranslateX = useCallback(
    (index: number) => {
      return scrollX.current.interpolate({
        inputRange: [
          index * width * 0.75,
          (index + 1) * width * 0.75,
          (index + 2) * width * 0.75,
        ],
        outputRange: [0, -width, 0],
      });
    },
    [scrollX.current],
  );

  const renderItem = useCallback(
    ({item, index}: {item: Movie; index: number}) => {
      const translateX = calculateTranslateX(index);

      return (
        <Animated.View
          removeClippedSubviews={false}
          style={{
            position: 'absolute',
            transform: [{translateX}],
            width: width,
            height,
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: width,
              height: height,
              position: 'absolute',
            }}>
            <NativeImage
              uri={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            />
          </View>
        </Animated.View>
      );
    },
    [calculateTranslateX],
  );

  const keyExtractor = useCallback((item: Movie) => item.id.toString(), []);

  const linearGradientColors = useMemo(
    () => [
      `${theme.colors.background}`,
      'transparent',
      `${theme.colors.background}`,
    ],
    [theme.colors.background],
  );

  return (
    <View style={{height, width, position: 'absolute', top: 0}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={keyExtractor}
        removeClippedSubviews={false}
        contentContainerStyle={{
          width,
          height,
        }}
        renderItem={renderItem}
        horizontal
        snapToInterval={width}
        snapToAlignment={'start'}
        pagingEnabled
      />
      <LinearGradient
        colors={linearGradientColors}
        style={{
          width,
          height,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export default BackgroundDrop;

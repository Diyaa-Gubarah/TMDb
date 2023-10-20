import {Animated, Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {useRTL, useTheme} from '../../hooks';

import LinearGradient from 'react-native-linear-gradient';
import {Movie} from '../../types/movie';
import {MovieBackdropItem} from './atom';

const {width, height} = Dimensions.get('screen');
const itemWidth = width * 0.75;

type Props = {
  data: Movie[] | undefined;
  scrollX: React.MutableRefObject<Animated.Value>;
};

const BackgroundDrop = ({data, scrollX}: Props) => {
  const {theme} = useTheme();
  const isRTL = useRTL();

  const calculateTranslateX = useCallback(
    (index: number) => {
      return scrollX.current.interpolate({
        inputRange: isRTL
          ? [
              -width + (index + 1) * itemWidth,
              -width + (index + 2) * itemWidth,
              -width + (index + 3) * itemWidth,
            ]
          : [index * itemWidth, (index + 1) * itemWidth],
        outputRange: isRTL ? [width, 0, -width] : [0, -width],
      });
    },
    [scrollX, isRTL],
  );

  const renderItem = useCallback(
    ({item, index}: {item: Movie; index: number}) => {
      const translateX = calculateTranslateX(index);

      return <MovieBackdropItem item={item} translateX={translateX} />;
    },
    [data?.length],
  );

  const keyExtractor = useCallback(
    (item: Movie) => `${item.id}${item.backdrop_path}`,
    [],
  );

  const linearGradientColors = useMemo(
    () => [
      theme.colors.background,
      'transparent',
      'transparent',
      theme.colors.background,
    ],
    [theme.id],
  );

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        contentContainerStyle: {
          flex: 1,
          flexDirection: isRTL ? 'row-reverse' : 'row',
          direction: isRTL ? 'ltr' : 'rtl',
        },
        gradient: {
          width,
          height,
          position: 'absolute',
          bottom: 0,
        },
      }),
    [isRTL],
  );

  return (
    <View style={{height, width, position: 'absolute'}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={keyExtractor}
        removeClippedSubviews={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        horizontal
        snapToInterval={width}
        snapToAlignment={'start'}
        pagingEnabled
      />
      <LinearGradient colors={linearGradientColors} style={styles.gradient} />
    </View>
  );
};

export default BackgroundDrop;

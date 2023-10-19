import * as React from 'react';

import {Animated, Dimensions, View} from 'react-native';
import {
  Header,
  NativeBackgroundImage,
  NativeIcon,
  NativeText,
  NativeView,
  TouchIcon,
} from '../../components';

import {AppNavigationProps} from '../../navigations/types';
import BackgroundDrop from './BackgroundDrop';
import {Movie} from '../../types/movie';
import {scale} from '../../utils/responsive';
import {useMovieStore} from '../../store/movie';
import useMoviesQuery from '../../query/useMoviesQuery';
import {useTheme} from '../../hooks';

const screenWidth = Dimensions.get('window').width;
const spacing = scale(4); // Adjust as needed
const itemWidth = screenWidth * 0.75; // Adjust as needed

type Props = AppNavigationProps<'MovieList'>;

const MovieList: React.FC<Props> = ({navigation}) => {
  const setMovie = useMovieStore(state => state.setMovie);
  const {movies, isLoading, isError} = useMoviesQuery();
  const {theme} = useTheme();

  const scrollX = React.useRef(new Animated.Value(0));

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX.current}}}],
    {useNativeDriver: true},
  );

  const calculateTranslateY = (index: number) => {
    return scrollX.current.interpolate({
      inputRange: [
        (index - 1) * itemWidth,
        index * itemWidth,
        (index + 1) * itemWidth,
      ],
      outputRange: [0, scale(-30), 0],
    });
  };

  const renderItem = React.useCallback(
    (item: Movie, onPress: (item: Movie) => void, index: number) => {
      return (
        <View
          style={{
            width: itemWidth,
            height: '60%',
          }}>
          <Animated.View
            style={{
              flex: 1,
              transform: [{translateY: calculateTranslateY(index)}],
              marginHorizontal: spacing,
              borderRadius: theme.spacing.lg,
              overflow: 'hidden',
            }}>
            <NativeBackgroundImage
              uri={`https://image.tmdb.org/t/p/original${item.poster_path}`}>
              <View
                style={{
                  backgroundColor: `${theme.colors.background}60`,
                  borderRadius: theme.spacing.lg,
                  padding: theme.spacing.md,
                  margin: theme.spacing.md,
                }}>
                <NativeText color="textPrimary" size="lg" family="bold">
                  {item.title}
                </NativeText>
                <NativeText color="textPrimary" size="sm">
                  {item.vote_average}
                </NativeText>
                <TouchIcon
                  background="primary"
                  name="play"
                  color="textPrimary"
                  onPress={() => onPress(item)}
                />
              </View>
            </NativeBackgroundImage>
          </Animated.View>
        </View>
      );
    },
    [setMovie],
  );

  const keyExtractor = React.useCallback(
    (item: Movie) => item.id.toString(),
    [],
  );

  const onPressItem = React.useCallback(
    (item: Movie) => {
      setMovie(item);
      navigation.navigate('MovieDetail');
    },
    [navigation],
  );

  if (isLoading) {
    return <NativeText color="primary">Loading</NativeText>;
  }
  if (isError) {
    return <NativeText color="textPrimary">Error</NativeText>;
  }

  return (
    <NativeView>
      <BackgroundDrop data={movies?.results} scrollX={scrollX} />
      <Header
        title="Tmdb"
        left={<NativeIcon name="play" color="textPrimary" />}
        right={<NativeIcon name="play" color="textPrimary" />}
      />
      <Animated.FlatList
        horizontal
        bounces={false}
        onScroll={handleScroll}
        contentContainerStyle={{alignItems: 'center'}}
        data={movies?.results}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => renderItem(item, onPressItem, index)}
        snapToAlignment={'start'}
        snapToInterval={itemWidth} // item width + margin
        scrollEventThrottle={16} // Adjust the value as needed
        decelerationRate={0}
      />
    </NativeView>
  );
};

export default MovieList;

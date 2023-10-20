import * as React from 'react';

import {Animated, Dimensions} from 'react-native';
import {Header, MovieListItem} from './atom';
import {Loading, NativeText, NativeView} from '../../components';

import {AppNavigationProps} from '../../navigations/types';
import BackgroundDrop from './BackgroundDrop';
import {Movie} from '../../types/movie';
import {scale} from '../../utils/responsive';
import {useMovieStore} from '../../store/movie';
import {useMoviesQuery} from '../../query';
import {useRTL} from '../../hooks';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.75;

type Props = AppNavigationProps<'MovieList'>;

const MovieList: React.FC<Props> = ({navigation}) => {
  const setMovie = useMovieStore(state => state.setMovie);
  const {movies, isLoading, isError} = useMoviesQuery();
  const isRTL = useRTL();

  const scrollX = React.useRef(new Animated.Value(0));

  const handleScroll = React.useMemo(
    () =>
      Animated.event([{nativeEvent: {contentOffset: {x: scrollX.current}}}], {
        useNativeDriver: true,
      }),
    [scrollX],
  );

  const calculateTranslateY = React.useCallback(
    (index: number) => {
      return scrollX.current.interpolate({
        inputRange: [
          (index - 1) * itemWidth,
          index * itemWidth,
          (index + 1) * itemWidth,
        ],
        outputRange: [0, scale(-30), 0],
      });
    },
    [scrollX.current],
  );

  const renderItem = React.useCallback(
    (item: Movie, onPress: (item: Movie) => void, index: number) => {
      return (
        <MovieListItem
          translateY={calculateTranslateY(index)}
          item={item}
          onPressItem={() => onPress(item)}
        />
      );
    },
    [setMovie],
  );

  const keyExtractor = React.useCallback(
    (item: Movie) => `${item.id}${item.poster_path}`,
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
    return <Loading />;
  }

  if (isError) {
    return (
      <NativeView background="background" justify="center">
        <NativeText color="textPrimary" size="md">
          Something went wrong
        </NativeText>
      </NativeView>
    );
  }

  return (
    <NativeView>
      <BackgroundDrop data={movies?.results} scrollX={scrollX} />
      <Header />

      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: isRTL ? 'row-reverse' : 'row',
          direction: isRTL ? 'ltr' : 'rtl',
          alignItems: 'center',
        }}
        data={movies?.results}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => renderItem(item, onPressItem, index)}
        snapToAlignment={'start'}
        snapToInterval={itemWidth}
        scrollEventThrottle={16}
        decelerationRate={0}
      />
    </NativeView>
  );
};

export default MovieList;

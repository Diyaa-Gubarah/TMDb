import * as React from 'react';

import {
  NativeImage,
  NativeList,
  NativeText,
  NativeTouch,
  NativeView,
} from '../../components';

import {AppNavigationProps} from '../../navigations/types';
import {Movie} from '../../types/movie';
import {View} from 'react-native';
import {scale} from '../../utils/responsive';
import {useMovieStore} from '../../store/movie';
import useMoviesQuery from '../../query/useMoviesQuery';
import {withContainer} from '../../hoc';

type Props = AppNavigationProps<'MovieList'>;

const MovieList: React.FC<Props> = ({navigation}) => {
  const setMovie = useMovieStore(state => state.setMovie);
  const {movies, isLoading, isError} = useMoviesQuery();

  const renderItem = React.useCallback(
    (item: Movie, onPress: () => void) => (
      <NativeView background="#">
        <NativeTouch onPress={onPress} background="primary">
          <NativeImage
            uri={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            rounded={'sm'}
            size={150}
          />
          <NativeText color="textPrimary">{item.title}</NativeText>
        </NativeTouch>
      </NativeView>
    ),
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
    <>
      <NativeText color="textPrimary">Movie List</NativeText>
      <NativeList
        data={movies?.results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onPressItem={onPressItem}
      />
    </>
  );
};

export default withContainer(MovieList);

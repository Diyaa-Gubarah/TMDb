import {MovieBackdrop, MovieInfo} from './atom';
import {ScrollView, StyleSheet} from 'react-native';

import {AppNavigationProps} from '../../navigations/types';
import {GENRES} from '../../data/GENRES';
import React from 'react';
import {useMovieStore} from '../../store/movie';
import {useTheme} from '../../hooks';

type Props = AppNavigationProps<'MovieDetail'>;

const MovieDetail: React.FC<Props> = ({navigation}) => {
  const {theme} = useTheme();
  const selectedMovie = useMovieStore(state => state.selectedMovie);

  const genres = React.useMemo(
    () =>
      GENRES.filter(genre => selectedMovie?.genre_ids.includes(genre.id)).map(
        genre => genre.name,
      ),
    [selectedMovie?.id],
  );

  return selectedMovie ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <MovieBackdrop
        backdropPath={selectedMovie.poster_path}
        onPressBack={() => navigation?.goBack()}
        hasVideo={!selectedMovie?.video}
        voteAverage={selectedMovie.vote_average}
        genres={genres}
      />
      <MovieInfo
        title={selectedMovie.title}
        releaseDate={selectedMovie.release_date}
        originalLanguage={selectedMovie.original_language}
        overview={selectedMovie.overview}
      />
    </ScrollView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    width: '100%',
    height: '50%',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 16,
    marginTop: 8,
  },
  overview: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default MovieDetail;

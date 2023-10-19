import { MovieBackdrop, MovieInfo } from './atom';

import { AppNavigationProps } from '../../navigations/types';
import { GENRES } from '../../data/GENRES';
import React from 'react';
import { ScrollView } from 'react-native';
import { useMovieStore } from '../../store/movie';
import { useTheme } from '../../hooks';

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

export default MovieDetail;

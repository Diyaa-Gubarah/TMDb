import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {
  NativeIcon,
  NativeImage,
  NativeText,
  NativeView,
  TouchIcon,
} from '../../components';

import {GENRES} from '../../data/GENRES';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {useMovieStore} from '../../store/movie';
import {useTheme} from '../../hooks';

const {height, width} = Dimensions.get('window');

const MovieDetail = ({}) => {
  const {theme} = useTheme();
  const selectedMovie = useMovieStore(state => state.selectedMovie);

  const genres = React.useMemo(
    () =>
      GENRES.filter(genre => selectedMovie?.genre_ids.includes(genre.id)).map(
        genre => genre.name,
      ),
    [selectedMovie?.id],
  );

  console.log(selectedMovie?.genre_ids);

  return selectedMovie ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      <View style={{width, height: height * 0.4}}>
        <NativeImage
          uri={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
        />
      </View>
      <LinearGradient
        colors={['transparent', theme.colors.background]}
        style={{
          width,
          height: height * 0.4,
          position: 'absolute',
          top: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!selectedMovie?.video && (
          <View
            style={{
              padding: theme.spacing.md,
              backgroundColor: `${theme.colors.textPrimary}70`,
              borderRadius: theme.spacing.md,
            }}>
            <TouchIcon
              name="play"
              color="background"
              size={28}
              onPress={() => {}}
            />
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width,
            padding: theme.spacing.lg,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: theme.colors.textPrimary,
                paddingHorizontal: theme.spacing.md,
                borderRadius: theme.spacing.lg,
              }}>
              <NativeIcon name="star" color="background" size={12} />
              <View style={{marginHorizontal: theme.spacing.xsm}} />
              <NativeText size="sm" color="background">
                {`${selectedMovie.vote_average}`}
              </NativeText>
            </View>
            {React.Children.toArray(
              genres.slice(0, 3).map(name => (
                <View style={{marginLeft: theme.spacing.md}}>
                  <NativeText size="sm" color="textPrimary" family="medium">
                    {name}
                  </NativeText>
                </View>
              )),
            )}

            <NativeText size="sm" color="textPrimary"></NativeText>
          </View>
        </View>
      </LinearGradient>

      <NativeView padding="lg">
        <NativeText size="lg" family="bold" color="textPrimary">
          {selectedMovie.title}
        </NativeText>
        <NativeText size="sm" color="textSecondary">
          {`${selectedMovie.release_date} , ${selectedMovie.original_language}`}
        </NativeText>
        <NativeText
          size="md"
          color="textPrimary"
          align="justify"
          family="light">
          {selectedMovie.overview}
        </NativeText>
      </NativeView>
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

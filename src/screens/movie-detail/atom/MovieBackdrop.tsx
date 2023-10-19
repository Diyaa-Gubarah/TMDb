import {Dimensions, StyleSheet, View} from 'react-native';
import {
  NativeIcon,
  NativeImage,
  NativeText,
  TouchIcon,
} from '../../../components';
import React, {useMemo} from 'react';

import BackButton from './BackButton';
import Genres from './Genres';
import LinearGradient from 'react-native-linear-gradient';
import MovieImage from './MovieImage';
import PlayButton from './PlayButton';
import Rating from './Rating';
import {useTheme} from '../../../hooks';

const {height, width} = Dimensions.get('screen');

type MovieBackdropProps = {
  backdropPath: string;
  onPressBack: () => void;
  hasVideo: boolean;
  voteAverage: number;
  genres: string[];
};

const MovieBackdrop: React.FC<MovieBackdropProps> = ({
  backdropPath,
  onPressBack,
  hasVideo,
  voteAverage,
  genres,
}) => {
  const {theme} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: height * 0.4,
        },

        gradientContainer: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ratingContainerOuter: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: theme.spacing.lg,
        },
        ratingContainerInner: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        },
      }),
    [theme],
  );

  return (
    <View style={styles.container}>
      <MovieImage backdropPath={backdropPath} />
      <LinearGradient
        colors={['transparent', theme.colors.background]}
        style={styles.gradientContainer}>
        <BackButton onPressBack={onPressBack} />
        {hasVideo && <PlayButton />}
        <View style={styles.ratingContainerOuter}>
          <View style={styles.ratingContainerInner}>
            <Rating voteAverage={voteAverage} />
            <Genres genres={genres} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default React.memo(MovieBackdrop);

import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {
  NativeBackgroundImage,
  NativeText,
  TouchIcon,
} from '../../../components';

import ItemCard from './ItemCard';
import LikeButton from './LikeButton';
import {Movie} from '../../../types/movie';
import Rating from '../../movie-detail/atom/Rating';
import React from 'react';
import {scale} from '../../../utils/responsive';
import {truncateTitle} from '../../../utils/utils';
import {useTheme} from '../../../hooks';

const {width, height} = Dimensions.get('screen');
const spacing = scale(4);
const itemWidth = width * 0.75;

type Props = {
  item: Movie;
  onPressItem: (item: Movie) => void;
  translateY: Animated.AnimatedInterpolation;
};

const MovieListItem: React.FC<Props> = ({item, onPressItem, translateY}) => {
  const {theme} = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        itemContainer: {
          width: itemWidth,
          height: height * 0.6,
        },

        animatedContainerStyle: {
          flex: 1,
          transform: [{translateY: translateY as unknown as number}], // Cast to number here
          marginHorizontal: spacing,
          borderRadius: theme.spacing.lg,
          overflow: 'hidden',
        },
      }),
    [theme],
  );

  return (
    <View style={styles.itemContainer}>
      <Animated.View style={styles.animatedContainerStyle}>
        <NativeBackgroundImage
          uri={`https://image.tmdb.org/t/p/original${item.poster_path}`}>
          <LikeButton />
          <ItemCard onPressItem={() => onPressItem(item)} item={item} />
        </NativeBackgroundImage>
      </Animated.View>
    </View>
  );
};

export default MovieListItem;

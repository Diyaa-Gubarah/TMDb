import {Animated, Dimensions, StyleSheet, View} from 'react-native';

import {Movie} from '../../../types/movie';
import {NativeImage} from '../../../components';
import React from 'react';
import {useTheme} from '../../../hooks';

const {width, height} = Dimensions.get('screen');

type MovieBackdropItemProps = {
  item: Movie;
  translateX: Animated.AnimatedInterpolation;
};

const MovieBackdropItem: React.FC<MovieBackdropItemProps> = ({
  item,
  translateX,
}) => {
  const {theme} = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        itemContainer: {
          width,
          height,
          position: 'absolute',
        },
        animatedContainerStyle: {
          position: 'absolute',
          transform: [{translateX: translateX as unknown as number}],
          width,
          height,
        },
      }),
    [theme.id, translateX],
  );

  return (
    <View style={styles.itemContainer}>
      <Animated.View
        removeClippedSubviews={false}
        style={styles.animatedContainerStyle}>
        <NativeImage
          uri={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        />
      </Animated.View>
    </View>
  );
};

export default React.memo(MovieBackdropItem);

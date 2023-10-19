import {NativeText, TouchIcon} from '../../../components';
import {StyleSheet, View} from 'react-native';
import {useRTL, useTheme} from '../../../hooks';

import {Movie} from '../../../types/movie';
import Rating from '../../movie-detail/atom/Rating';
import React from 'react';
import {truncateTitle} from '../../../utils/utils';

type Props = {
  item: Movie;
  onPressItem: (item: Movie) => void;
};

const ItemCard: React.FC<Props> = ({item, onPressItem}) => {
  const {theme} = useTheme();
  const isRTL = useRTL();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: `${theme.colors.background}80`,
          borderRadius: theme.spacing.lg,
          padding: theme.spacing.md,
          margin: theme.spacing.md,
          position: 'absolute',
          maxWidth: '90%',
          bottom: 0,
          alignSelf: 'center',
          alignItems: 'flex-start',
        },

        ratingContainer: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: theme.spacing.sm,
        },
      }),
    [theme.id],
  );

  return (
    <View style={styles.container}>
      <NativeText color="textPrimary" size="lg" family="medium" align="left">
        {truncateTitle(item.title)}
      </NativeText>
      <View style={styles.ratingContainer}>
        <Rating voteAverage={item.vote_average} />
        <TouchIcon
          name={isRTL ? 'chevron-back' : 'chevron-forward'}
          color="textPrimary"
          onPress={() => onPressItem(item)}
          size={22}
        />
      </View>
    </View>
  );
};

export default React.memo(ItemCard);

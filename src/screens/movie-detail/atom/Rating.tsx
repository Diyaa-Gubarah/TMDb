import * as React from 'react';

import {NativeIcon, NativeText} from '../../../components';
import {StyleSheet, View} from 'react-native';
import {useRTL, useTheme} from '../../../hooks';

const Rating: React.FC<{voteAverage: number}> = ({voteAverage}) => {
  const {theme} = useTheme();
  const isRTL = useRTL();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        ratingContainer: {
          flexDirection: isRTL ? 'row-reverse' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.primary,
          paddingHorizontal: theme.spacing.md,
          borderRadius: theme.spacing.lg,
        },
        ratingTextContainer: {
          marginHorizontal: theme.spacing.sm,
        },
      }),
    [theme.id],
  );

  return (
    <View style={styles.ratingContainer}>
      <NativeIcon name="star" color="background" size={14} />
      <View style={styles.ratingTextContainer} />
      <NativeText size="sm" color="background">{`${voteAverage}`}</NativeText>
    </View>
  );
};
export default React.memo(Rating);

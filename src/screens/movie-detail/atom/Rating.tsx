import * as React from 'react';

import { NativeIcon, NativeText } from '../../../components';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../../hooks';

const Rating: React.FC<{voteAverage: number}> = ({voteAverage}) => {
  const {theme} = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        ratingContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.primary,
          paddingHorizontal: theme.spacing.md,
          borderRadius: theme.spacing.lg,
          flex: 0,
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

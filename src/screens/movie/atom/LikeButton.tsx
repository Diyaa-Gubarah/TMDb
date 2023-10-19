import {StyleSheet, View} from 'react-native';

import React from 'react';
import {TouchIcon} from '../../../components';
import {useTheme} from '../../../hooks';

const LikeButton = () => {
  const {theme} = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        heartButton: {
          position: 'absolute',
          margin: theme.spacing.md,
          right: 0,
        },
      }),
    [theme.id],
  );

  return (
    <View style={styles.heartButton}>
      <TouchIcon
        onPress={() => {}}
        name={'heart-circle'}
        color="primary"
        size={28}
      />
    </View>
  );
};

export default React.memo(LikeButton);

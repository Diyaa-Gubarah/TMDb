import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {useRTL, useTheme} from '../../../hooks';

import {TouchIcon} from '../../../components';

const BackButton: React.FC<{onPressBack: () => void}> = ({onPressBack}) => {
  const {theme} = useTheme();
  const isRTL = useRTL();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        backButton: {
          position: 'absolute',
          top: theme.spacing.lg,
          left: 0,
          padding: theme.spacing.md,
        },
      }),
    [theme.id],
  );

  return (
    <View style={styles.backButton}>
      <TouchIcon
        name={isRTL ? 'chevron-forward' : 'chevron-back'}
        color="primary"
        size={22}
        onPress={onPressBack}
      />
    </View>
  );
};

export default React.memo(BackButton);

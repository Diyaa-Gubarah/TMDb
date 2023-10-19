import * as React from 'react';

import {StyleSheet, View} from 'react-native';

import {TouchIcon} from '../../../components';
import {useTheme} from '../../../hooks';

const PlayButton: React.FC = () => {
  const {theme} = useTheme();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        playButton: {
          padding: theme.spacing.md,
          backgroundColor: `${theme.colors.background}70`,
          borderRadius: theme.spacing.md,
        },
      }),
    [theme.id],
  );

  return (
    <View style={styles.playButton}>
      <TouchIcon name="play" color="primary" size={28} onPress={() => {}} />
    </View>
  );
};

export default React.memo(PlayButton);

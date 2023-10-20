import * as React from 'react';

import {StyleSheet, View} from 'react-native';

import {NativeText} from '../../../components';
import {useTheme} from '../../../hooks';

const Genres: React.FC<{genres: string[]}> = ({genres}) => {
  const {theme} = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        infoRow: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        },
        genreContainer: {
          marginLeft: theme.spacing.md,
        },
      }),
    [theme.id],
  );

  return (
    <View style={styles.infoRow}>
      {React.Children.toArray(
        genres.slice(0, 3).map(name => (
          <View style={styles.genreContainer}>
            <NativeText size="sm" color="textPrimary" family="medium">
              {name}
            </NativeText>
          </View>
        )),
      )}
    </View>
  );
};

export default React.memo(Genres);

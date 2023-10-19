import * as React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';

import {NativeImage} from '../../../components';

const {height} = Dimensions.get('screen');

const MovieImage: React.FC<{backdropPath: string}> = ({backdropPath}) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: height * 0.4,
        },
      }),
    [],
  );

  return (
    <View style={styles.container}>
      <NativeImage uri={`https://image.tmdb.org/t/p/original${backdropPath}`} />
    </View>
  );
};
export default React.memo(MovieImage);

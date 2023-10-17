import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {AppNavigationProps} from '../../navigations/types';
import {NativeText} from '../../components';
import {useMovieStore} from '../../store/movie';
import {withContainer} from '../../hoc';

type Props = AppNavigationProps<'MovieDetail'>;

const MovieDetail: React.FC<Props> = ({}) => {
  const selectedMovie = useMovieStore(state => state.selectedMovie);
  return (
    <View style={styles.container}>
      <NativeText color="textPrimary">
        {JSON.stringify(selectedMovie?.id)}
      </NativeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default withContainer(MovieDetail);

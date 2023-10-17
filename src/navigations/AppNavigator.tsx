import * as React from 'react';

import {AppNavigatorParamList} from './types';
import MovieDetail from '../screens/movie-detail/MovieDetail';
import MovieList from '../screens/movie/MovieList';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AppNavigatorParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MovieList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MovieList" component={MovieList} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

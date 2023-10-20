import 'react-native-gesture-handler';

import * as React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {AppNavigator} from './src/navigations/index';
import {LightTheme} from './src/constants/themes';
import {NativeStateBar} from './src/components';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/hooks/useTheme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider initial={LightTheme}>
        <NativeStateBar />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

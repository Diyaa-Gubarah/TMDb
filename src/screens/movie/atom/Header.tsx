import {NativeText, NativeView, TouchIcon} from '../../../components';
import {Text, View} from 'react-native';

import {DEFAULT_DARK_THEME_ID} from '../../../constants/themes';
import React from 'react';
import {useTheme} from '../../../hooks';

type Props = {};

const Header = (props: Props) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <NativeView
      flex={false}
      align="center"
      marginVertical="lg"
      padding="lg"
      direction="row"
      justify="space-between">
      <NativeText size="lg" family="bold" color="primary">
        TMDB
      </NativeText>
      <TouchIcon
        onPress={toggleTheme}
        name={theme.id === DEFAULT_DARK_THEME_ID ? 'sunny-outline' : 'sunny'}
        color="textPrimary"
      />
    </NativeView>
  );
};

export default React.memo(Header);

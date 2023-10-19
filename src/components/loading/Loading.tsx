import { ActivityIndicator } from 'react-native';
import NativeView from '../view/NativeView';
import React from 'react';
import { useTheme } from '../../hooks';

type Props = {};

const Loading = ({}: Props) => {
  const {theme} = useTheme();
  return (
    <NativeView background="background" justify="center">
      <ActivityIndicator color={theme.colors.primary} size={'large'} />
    </NativeView>
  );
};

export default React.memo(Loading);

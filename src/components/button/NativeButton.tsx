import {ColorValues, SpaceValues} from '../../types/theme';

import {ActivityIndicator} from 'react-native';
import {NativeText} from '..';
import NativeTouch from '../touch/NativeTouch';
import React from 'react';
import {useTheme} from '../../hooks';

type Props = {
  onPress: () => void;
  isValid: boolean;
  loading?: boolean;
  label: string;
  margin?: SpaceValues;
  color?: ColorValues;
  textColor?: ColorValues;
};

const NativeButton = ({
  onPress,
  isValid,
  label,
  margin = 'lg',
  loading = false,
  color = 'primary',
  textColor = 'background',
}: Props) => {
  const {theme} = useTheme();
  return (
    <NativeTouch
      onPress={() => isValid && onPress()}
      rounded="sm"
      margin={margin}
      background={isValid ? color : 'textSecondary'}
      padding="md">
      {loading ? (
        <ActivityIndicator size={'small'} color={theme.colors[textColor]} />
      ) : (
        <NativeText size="md" color={textColor} align="center">
          {label}
        </NativeText>
      )}
    </NativeTouch>
  );
};

export default NativeButton;

import {ColorValues, SpaceValues} from '../../types/theme';
import React, {useCallback} from 'react';

import {Pressable} from 'react-native';
import {useTheme} from '../../hooks';

interface Props {
  onPress: () => void;
  children?: React.ReactNode;
  background: ColorValues | undefined;
  padding?: SpaceValues;
  margin?: SpaceValues;
  rounded?: SpaceValues;
  borderColor?: ColorValues;
}

const NativeTouch = ({
  onPress,
  children,
  background,
  padding,
  margin,
  rounded,
  borderColor,
}: Props) => {
  const {theme} = useTheme();

  const handlePress = useCallback(() => {
    onPress?.();
  }, []);

  const touchableStyle = React.useMemo(
    () => ({
      ...(padding && {padding: theme.spacing[padding]}),
      ...(margin && {marginVertical: theme.spacing[margin]}),
      ...(rounded && {
        borderRadius: theme.spacing[rounded],
      }),
      ...(background && {
        backgroundColor: theme.colors[background] || background,
      }),
      ...(borderColor && {
        borderColor: theme.colors[borderColor],
        borderWidth: theme.spacing.xsm / 2,
      }),
    }),
    [theme.id],
  );

  return (
    <Pressable
      onPress={handlePress}
      style={{
        ...touchableStyle,
        overflow: 'hidden',
      }}>
      {children}
    </Pressable>
  );
};

export default NativeTouch;

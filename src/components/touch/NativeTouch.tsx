import { ColorValues, SpaceValues } from "../../types/theme";
import { Pressable, PressableProps } from "react-native";
import React, { useCallback } from "react";

import { useTheme } from "../../hooks";

interface Props extends Partial<PressableProps> {
  onPress: () => void;
  children: React.ReactNode;
  background?: ColorValues | string;
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
  ...rest
}: Props) => {
  const { theme } = useTheme();
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  const touchableStyle = {
    ...(padding && { padding: theme.spacing[padding] }),
    ...(margin && { marginVertical: theme.spacing[margin] }),
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
  };

  return (
    <Pressable
      onPress={handlePress}
      {...rest}
      style={{ ...touchableStyle, overflow: "hidden" }}
    >
      {children}
    </Pressable>
  );
};

export default NativeTouch;

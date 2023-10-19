import { ColorValues, SpaceValues } from "../../types/theme";
import { Text as NativeText, TextProps } from "react-native";

import React from "react";
import { useTheme } from "../../hooks/index";

export const FONT_FAMILY = {
  regular: "Dubai-Regular",
  medium: "Dubai-Medium",
  bold: "Dubai-Bold",
  light: "Dubai-Light",
};

interface Props extends TextProps {
  size?: SpaceValues;
  color?: ColorValues;
  children?: React.ReactNode;
  padding?: SpaceValues;
  margin?: SpaceValues;
  family?: "regular" | "medium" | "bold" | "light";
  align?: "left" | "center" | "right" | "justify";
  numberOfLines?: number;
}

const Text = ({
  children,
  color,
  size,
  padding,
  margin,
  align,
  family = "regular",
  numberOfLines,
  ...props
}: Props) => {
  const { theme } = useTheme();
  // Generate our style sheet based on the current theme
  // We're using the React.useMemo hook for optimization,
  // the Styles object will be re-generated if the theme changes
  const textStyle = React.useMemo(
    () => ({
      fontSize: theme?.fontSizes[size || "md"],
      fontFamily: FONT_FAMILY[family],
      ...(padding && { padding: theme.spacing[padding] }),
      ...(align && { textAlign: align }),
      ...(margin && { marginVertical: theme.spacing[margin] }),
      ...(color && { color: theme.colors[color] }),
    }),
    [theme, color, size, padding, margin]
  );

  return (
    <NativeText style={textStyle} numberOfLines={numberOfLines} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;

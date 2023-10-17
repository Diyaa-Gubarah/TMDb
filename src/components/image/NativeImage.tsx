import { Image, ImageProps } from "react-native";

import React from "react";
import { SpaceValues } from "../../types/theme";
import { scale } from "../../utils/responsive";
import { useTheme } from "../../hooks";

type NativeImageProps = {
  source: { uri: string } | string;
  rounded?: SpaceValues | number;
  size?: SpaceValues | string;
} & Omit<ImageProps, "source">;

const SIZE = {
  lg: scale(48),
  md: scale(32),
  sm: scale(24),
  xsm: scale(12),
};

const NativeImage = (props: NativeImageProps) => {
  const { source, rounded = "sm", size = "lg", style, ...otherProps } = props;
  const { theme } = useTheme();

  const imageStyle = React.useMemo(
    () => ({
      ...(size && { width: SIZE[size] || size, height: SIZE[size] || size }),
      ...(rounded && { borderRadius: theme.spacing[rounded] }),
    }),
    [theme, size, rounded]
  );

  return (
    <Image
      source={source}
      style={{
        ...imageStyle,
        resizeMode: "cover",
      }}
      {...otherProps}
    />
  );
};

export default NativeImage;

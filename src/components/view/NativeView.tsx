import { ColorValues, SpaceValues } from "../../types/theme";

import React from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks/index";

// interface ContainerViewProps extends ViewProps {
interface ContainerViewProps {
  children: React.ReactNode;
  padding?: SpaceValues | number;
  background?: ColorValues | string;
  marginHorizontal?: SpaceValues | number;
  marginVertical?: SpaceValues | number;
  direction?: "row" | "column" | "row-reverse";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  flex?: boolean;
  rounded?: SpaceValues;
}

const NativeView: React.FC<ContainerViewProps> = ({
  children,
  padding,
  marginHorizontal,
  marginVertical,
  direction,
  justify,
  align,
  rounded,
  background = "background",
  flex = true,
}) => {
  const { theme } = useTheme();
  const containerStyle = React.useMemo(
    () => ({
      backgroundColor: theme.colors[background] || background,
      padding: padding ? theme.spacing[padding] : 0,
      marginHorizontal: marginHorizontal ? theme.spacing[marginHorizontal] : 0,
      marginVertical: marginVertical ? theme.spacing[marginVertical] : 0,
      ...(flex && { flex: 1 }),
      ...(rounded && { borderRadius: theme.spacing[rounded] }),
      ...(direction && { flexDirection: direction }),
      ...(justify && { justifyContent: justify }),
      ...(align && { alignItems: align }),
    }),
    [
      flex,
      rounded,
      direction,
      justify,
      align,
      background,
      padding,
      marginHorizontal,
      marginVertical,
      theme.id,
    ]
  );

  return <View style={containerStyle}>{children}</View>;
};

export default NativeView;

import { ActivityIndicator } from "react-native";
import NativeView from "../view/NativeView";
import React from "react";
import { useTheme } from "../../hooks";

type Props = {};

const Loading = ({}: Props) => {
  const { theme } = useTheme();
  return (
    <NativeView align="center" justify="center" background="background">
      <ActivityIndicator size="large" color={theme.colors.textPrimary} />
    </NativeView>
  );
};

export default Loading;

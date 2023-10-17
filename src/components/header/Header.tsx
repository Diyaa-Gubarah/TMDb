import { useRTL, useTheme, useTranslate } from "../../hooks";

import { NativeText } from "..";
import NativeView from "../view/NativeView";
import React from "react";
import { View } from "react-native";

type LeftRightComponent = JSX.Element | null;

type Props = {
  left?: LeftRightComponent;
  title: string;
  right?: LeftRightComponent;
};

const Header = ({ title, left, right }: Props) => {
  const { theme } = useTheme();
  const isRTL = useRTL();
  const t = useTranslate();
  return (
    <View
      style={{
        flexDirection: isRTL ? "row" : "row-reverse",
        alignItems: "center",
      }}
    >
      {left}
      <NativeView>
        <NativeText size="lg" color="textPrimary" align="center">
          {t(`${title}`)}
        </NativeText>
      </NativeView>
      {right}
    </View>
  );
};

export default React.memo(Header);

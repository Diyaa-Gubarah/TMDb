import NativeImage from "../image/NativeImage";
import { NativeText } from "..";
import NativeView from "../view/NativeView";
import React from "react";

type EmptyProps = {
  imageSource: string;
  title: string;
  subtitle: string;
};

const Empty: React.FC<EmptyProps> = ({ imageSource, title, subtitle }) => {
  return (
    <NativeView
      direction="column"
      justify="center"
      align="center"
      background="background"
    >
      <NativeImage source={imageSource} size="lg" />
      <NativeText size="lg" color="textPrimary" margin="sm" align="center">
        {title}
      </NativeText>
      <NativeText size="sm" color="textSecondary" align="center">
        {subtitle}
      </NativeText>
    </NativeView>
  );
};

export default Empty;

import FastImage from 'react-native-fast-image';
import {ImageProps} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks';

type NativeImageProps = {
  uri: string;
  children?: React.ReactNode;
} & Omit<ImageProps, 'source'>;

const NativeBackgroundImage = (props: NativeImageProps) => {
  const {uri, children} = props;
  const {theme} = useTheme();
  const imageStyle = React.useMemo(
    () => ({
      flex: 1,
      backgroundColor: theme.colors.transparent,
    }),
    [],
  );

  return (
    <FastImage
      fallback //If true will fallback to using Image. In this case the image will still be styled and laid out the same way as FastImage.
      style={{
        ...imageStyle,
      }}
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable, // Only updates if url changes.
      }}
      resizeMode={FastImage.resizeMode.cover}>
      {children}
    </FastImage>
  );
};

export default NativeBackgroundImage;

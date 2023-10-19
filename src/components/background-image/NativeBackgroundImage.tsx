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
      // backgroundColor: theme.colors.background,
    }),
    [],
  );

  return (
    <FastImage
      style={{
        ...imageStyle,
      }}
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.cacheOnly,
      }}
      resizeMode={FastImage.resizeMode.cover}>
      {children}
    </FastImage>
  );
};

export default NativeBackgroundImage;

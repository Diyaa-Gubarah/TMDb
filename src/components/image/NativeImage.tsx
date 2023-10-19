import FastImage from 'react-native-fast-image';
import {ImageProps} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks';

type NativeImageProps = {
  uri: string;
} & Omit<ImageProps, 'source'>;

const NativeImage = (props: NativeImageProps) => {
  const {uri} = props;
  const {theme} = useTheme();
  const imageStyle = React.useMemo(
    () => ({
      flex: 1,
      backgroundColor: theme.colors.background,
    }),
    [theme.id],
  );

  return (
    <FastImage
      resizeMode={FastImage.resizeMode.cover}
      style={imageStyle}
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.cacheOnly,
      }}
    />
  );
};

export default NativeImage;

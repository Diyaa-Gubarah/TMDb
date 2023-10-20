import FastImage from 'react-native-fast-image';
import {ImageProps} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import {useTheme} from '../../hooks';

type NativeImageProps = {
  uri: string;
  isDefault?: boolean;
} & Omit<ImageProps, 'source'>;

const NativeImage = (props: NativeImageProps) => {
  const {uri, isDefault = false} = props;
  const {theme} = useTheme();
  const imageStyle = React.useMemo(
    () => ({
      flex: 1,
      backgroundColor: theme.colors.transparent,
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
        cache: FastImage.cacheControl.immutable, // Only updates if url changes.
      }}
      defaultSource={isDefault && images.empty}
      fallback //If true will fallback to using Image. In this case the image will still be styled and laid out the same way as FastImage.
    />
  );
};

export default NativeImage;

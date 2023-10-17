import FastImage from 'react-native-fast-image';
import {ImageProps} from 'react-native';
import React from 'react';
import {SpaceValues} from '../../types/theme';
import {scale} from '../../utils/responsive';
import {useTheme} from '../../hooks';

type NativeImageProps = {
  rounded?: SpaceValues | number;
  size: SpaceValues | number;
  uri: string;
} & Omit<ImageProps, 'source'>;

const SIZE = {
  lg: scale(48),
  md: scale(32),
  sm: scale(24),
  xsm: scale(12),
};

const NativeImage = (props: NativeImageProps) => {
  const {rounded, size, style, uri} = props;
  const {theme} = useTheme();

  const imageStyle = React.useMemo(
    () => ({
      flex: 1,
      width: typeof size === 'string' ? SIZE[size] : size,
      height: typeof size === 'string' ? SIZE[size] : size,
      borderRadius:
        typeof rounded === 'string' ? theme.spacing[rounded] : rounded,
    }),
    [theme, size, rounded],
  );

  return (
    <FastImage
      style={{
        ...imageStyle,
      }}
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
        cache: 'cacheOnly',
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default NativeImage;

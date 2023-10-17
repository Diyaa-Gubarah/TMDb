import React, {Children} from 'react';

import FastImage from 'react-native-fast-image';
import {ImageProps} from 'react-native';
import {SpaceValues} from '../../types/theme';
import {scale} from '../../utils/responsive';
import {useTheme} from '../../hooks';

type NativeImageProps = {
  rounded?: SpaceValues | number;
  size: SpaceValues | number;
  uri: string;
  childern: React.ReactNode;
} & Omit<ImageProps, 'source'>;

const SIZE = {
  lg: scale(48),
  md: scale(32),
  sm: scale(24),
  xsm: scale(12),
};

const NativeBackgroundImage = (props: NativeImageProps) => {
  const {rounded, size, style, uri, childern, ...otherProps} = props;
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
      resizeMode={FastImage.resizeMode.cover}>
      {childern}
    </FastImage>
  );
};

export default NativeBackgroundImage;

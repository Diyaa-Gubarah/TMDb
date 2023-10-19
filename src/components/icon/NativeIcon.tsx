import * as React from 'react';

import {ColorValues} from '../../types/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from '../../utils/responsive';
import {useTheme} from '../../hooks';

export type IconName =
  | 'play'
  | 'star'
  | 'chevron-back'
  | 'chevron-forward'
  | 'sunny'
  | 'sunny-outline'
  | 'heart-circle'
  | 'heart-circle-outline';

export type IconSize = 12 | 14 | 18 | 22 | 28 | 48;

interface Props {
  name: IconName;
  color: ColorValues;
  size?: IconSize;
}
const NativeIcon: React.FC<Props> = ({name, color, size = 22}) => {
  const {theme} = useTheme();

  return <Icon name={name} color={theme.colors[color]} size={scale(size)} />;
};

export default NativeIcon;

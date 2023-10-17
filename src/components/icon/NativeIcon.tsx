import {ColorValues} from '../../types/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from '../../utils/responsive';
import {useTheme} from '../../hooks';
import * as React from 'react';

export type IconName =
  | 'dashboard'
  | 'bus'
  | 'ticket'
  | 'account'
  | 'weather-night-partly-cloudy'
  | 'weather-partly-cloudy'
  | 'map-marker-circle'
  | 'map-marker'
  | 'calendar'
  | 'person'
  | 'clock-outline'
  | 'swap-vertical-circle'
  | 'arrow-down-drop-circle'
  | 'arrow-up-drop-circle'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-right-circle'
  | 'arrow-left-circle'
  | 'ray-start-arrow'
  | 'ray-end-arrow'
  | 'steering'
  | 'wallet-plus'
  | 'dots-vertical'
  | 'dots-horizontal'
  | 'phone'
  | 'format-letter-case'
  | 'chevron-left'
  | 'chevron-right'
  | 'comment-account'
  | 'logout'
  | 'star'
  | 'star-outline'
  | 'star-half-full'
  | 'delete'
  | 'information'
  | 'unfold-more-horizontal'
  | 'view-dashboard'
  | 'plus-circle'
  | 'bell-circle'
  | 'bus-clock'
  | 'upload';

export type IconSize = 14 | 18 | 22 | 28;

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

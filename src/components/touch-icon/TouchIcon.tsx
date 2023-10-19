import {ColorValues, SpaceValues} from '../../types/theme';
import NativeIcon, {IconName, IconSize} from '../icon/NativeIcon';

import NativeTouch from '../touch/NativeTouch';
import React from 'react';

type Props = {
  onPress: (arg?: unknown) => void;
  padding?: SpaceValues | undefined;
  background?: ColorValues | undefined;
  name: IconName;
  color?: ColorValues;
  size?: IconSize;
};

const TouchIcon = ({
  onPress,
  name = 'play',
  background,
  color = 'textPrimary',
  padding,
  size = 28,
}: Props) => {
  return (
    <NativeTouch
      onPress={onPress}
      background={background || undefined}
      padding={padding}>
      <NativeIcon color={color} name={name} size={size} />
    </NativeTouch>
  );
};

export default React.memo(TouchIcon);

import {ColorValues, SpaceValues} from '../../types/theme';
import {View, ViewStyle} from 'react-native';

import React from 'react';
import {useTheme} from '../../hooks/index';

interface ContainerViewProps {
  children?: React.ReactNode;
  padding?: SpaceValues;
  background?: ColorValues;
  marginHorizontal?: SpaceValues;
  marginVertical?: SpaceValues;
  direction?: 'row' | 'column' | 'row-reverse';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  flex?: boolean;
  rounded?: SpaceValues;
}

const NativeView: React.FC<ContainerViewProps> = ({
  children,
  padding,
  marginHorizontal,
  marginVertical,
  direction,
  justify,
  align,
  rounded,
  background,
  flex = true,
}) => {
  const {theme} = useTheme();

  const containerStyle: ViewStyle = {
    overflow: 'hidden',
    padding: padding ? theme.spacing[padding] : 0,
    marginHorizontal: marginHorizontal ? theme.spacing[marginHorizontal] : 0,
    marginVertical: marginVertical ? theme.spacing[marginVertical] : 0,
    flex: flex ? 1 : undefined,
    borderRadius: rounded ? theme.spacing[rounded] : undefined,
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    backgroundColor: background ? theme.colors[background] : undefined,
  };

  return <View style={containerStyle}>{children}</View>;
};

export default NativeView;

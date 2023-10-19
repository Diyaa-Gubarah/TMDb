import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeText} from '..';
import NativeView from '../view/NativeView';
import React from 'react';
import {useTheme} from '../../hooks';
import {withContainer} from '../../hoc';

const {width} = Dimensions.get('screen');
type LeftRightComponent = JSX.Element | null;

type Props = {
  left?: LeftRightComponent;
  title: string;
  right?: LeftRightComponent;
};

const Header = ({title, left, right}: Props) => {
  const {theme} = useTheme();
  return (
    <LinearGradient
      colors={[theme.colors.background, 'transparent']} // Adjust colors as needed
      style={{position: 'absolute', width}}>
      <NativeView
        direction="row"
        align="center"
        flex={false}
        marginVertical="lg">
        {left}
        <NativeView>
          <NativeText size="lg" color="textPrimary" align="center">
            {title}
          </NativeText>
        </NativeView>
        {right}
      </NativeView>
    </LinearGradient>
  );
};

export default React.memo(withContainer(Header));

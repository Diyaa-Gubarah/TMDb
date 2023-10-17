import {FlatList, View, ViewStyle} from 'react-native';
import React, {useCallback, useMemo} from 'react';

import {SpaceValues} from '../../types/theme';
import {useTheme} from '../../hooks';

interface Props<T> {
  data: T[] | null | undefined;
  renderItem: (item: T, onPress: () => void) => JSX.Element;
  keyExtractor: (item: T) => string;
  direction?: 'horizontal' | 'vertical';
  initialNumToRender?: number;
  maxToRenderPerBatch?: number;
  windowSize?: number;
  sepGap?: SpaceValues;
  onPressItem?: (item: T) => void;
  ListEmptyComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
}

type GapStyle = Partial<
  Pick<ViewStyle, 'backgroundColor' | 'width' | 'height'>
>;
const ItemSeparator = ({...reset}: GapStyle) => <View style={reset} />;

const NativeList = <T extends {}>({
  data,
  renderItem,
  keyExtractor,
  direction = 'vertical',
  initialNumToRender = 10,
  maxToRenderPerBatch = 10,
  windowSize = 21,
  sepGap = 'sm',
  onPressItem,
  ...rest
}: Props<T>) => {
  const {theme} = useTheme();
  const memoizedGap = useMemo(
    () => ({
      ...(direction === 'horizontal' && {width: theme.spacing[sepGap]}),
      ...(direction === 'vertical' && {height: theme.spacing[sepGap]}),
    }),
    [sepGap],
  );
  const memoizedData = useMemo(() => data, [data]);
  const memoizedKeyExtractor = useCallback(keyExtractor, [keyExtractor]);

  const handlePressItem = (item: T) => {
    if (onPressItem) {
      onPressItem(item);
    }
  };

  const renderItemWithPress = useCallback(
    (item: T) => {
      return renderItem(item, () => handlePressItem(item));
    },
    [renderItem, handlePressItem],
  );

  return (
    <FlatList
      contentContainerStyle={{
        ...(direction === 'horizontal' && {
          flexGrow: 1,
          flexDirection: 'row',
        }),
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={memoizedData}
      renderItem={({item}) => renderItemWithPress(item)}
      keyExtractor={memoizedKeyExtractor}
      ItemSeparatorComponent={() => <ItemSeparator {...memoizedGap} />}
      horizontal={direction === 'horizontal'}
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      windowSize={windowSize}
      {...rest}
    />
  );
};

export default NativeList;

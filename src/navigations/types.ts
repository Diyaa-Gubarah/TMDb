import { StackNavigationProp } from '@react-navigation/stack';

export type AppNavigatorParamList = {
    MovieList: undefined;
    MovieDetail: undefined
};


export type AppNavigationProps<T extends keyof AppNavigatorParamList> = {
    navigation: StackNavigationProp<AppNavigatorParamList, T>;
};

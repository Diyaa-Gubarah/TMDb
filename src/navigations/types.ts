import { StackNavigationProp } from '@react-navigation/stack';

// Define a type for your navigator
export type AppNavigatorParamList = {
    MovieList: undefined;
    MovieDetail: undefined
};


export type AppNavigationProps<T extends keyof AppNavigatorParamList> = {
    navigation: StackNavigationProp<AppNavigatorParamList, T>;
};

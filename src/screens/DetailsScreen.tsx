import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meal } from '../models/types';
import MealItem from '../components/MealItem';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

// const RootStack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Random: undefined;
  Details: { meal: Meal };
};

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<Props> = ({ route, navigation }: Props) => {
    
    const { meal } = route.params;

    return(
        <View>
            <MealItem meal={meal}
                navigation={navigation} />
        </View>
    )
}

export default DetailsScreen;
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meal } from '../models/types';
import MealItem from '../components/MealDisplay';

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
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<Props> = ({ route }: Props) => {
    
    const { meal } = route.params;

    return(
        <View>
            <MealItem id={meal.id}
                title={meal.title}
                category={meal.category}
                instructions={meal.instructions}
                thumbnail={meal.thumbnail} />
        </View>
    )
}

export default DetailsScreen;
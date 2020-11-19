import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Meal } from '../models/types';
import MealItem from './MealItem';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

type Props = {
    mealList: Meal[]
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MealList: React.FC<Props> = ({ mealList, navigation }) => {
    const renderItem = ({ item }: { item: Meal }) => (
        <MealItem meal={item}
            navigation={navigation} />
    );

    return (
        <View>
            <FlatList 
                data={mealList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red'
    }
})

export default MealList;
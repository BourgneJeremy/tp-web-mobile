import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Meal } from '../models/types';
import MealItem from './MealDisplay';

type Props = {
    mealList: Meal[]
}

const MealList: React.FC<Props> = ({ mealList }) => {
    const renderItem = ({ item }: { item: Meal }) => (
        <MealItem id={item.id}
            title={item.title} 
            category={item.category} 
            instructions={item.instructions}
            thumbnail={item.thumbnail} />
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
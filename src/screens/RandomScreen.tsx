import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import { JSONMeal, Meal } from '../models/types';
import { toMeals } from '../models/utils';
import MealItem from '../components/MealItem';
  
type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// Takes a random meal in the list and display it back to the user
const RandomScreen: React.FC<Props> = ({ navigation }) => {
    
    const [randomMeal, setRandomMeal] = useState<Meal>();
    const [randomMealFound, setRandomMealFound] = useState(false);

    // Get the meals
    if (randomMealFound == false) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => {
            // return an array
            const getJSONRandomMeal: JSONMeal = res.data.meals[0];
            const getRandomMeal: Meal = toMeals(getJSONRandomMeal);

            setRandomMeal(getRandomMeal);
        })
        .catch((err) => {
            throw err;
        })
        setRandomMealFound(true);
    }
    
    // Take a random index in the list
    // Show the item
    if (randomMeal !== undefined) {
        return(
            <View>
                <MealItem id={randomMeal.id} 
                    title={randomMeal.title}
                    category={randomMeal.category} 
                    instructions={randomMeal.instructions}
                    thumbnail={randomMeal.thumbnail}
                    navigation={navigation} />
            </View>
        )
    } else {
        return null;
    }
}

export default RandomScreen;
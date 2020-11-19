import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { Meal, JSONMeal } from '../models/types';
import MealList from '../components/MealList';
import axios from 'axios'
import { toMeals } from '../models/utils';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchScreen: React.FC<Props> = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState<Meal[]>([]);

    const updateSearch = (search: string) => {
        setVisible(false);
        setSearch(search);
    }

    const searchBtn = (search: string) => {
        setMeals([]);
        setVisible(true);
        // get the query
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then((res) => {
            // return an array
            if (res.data.meals == null || res.data.meals == undefined) {
                console.log("Your value hasn't been found");
                // TODO: display an error message
            } else {
                const myMeals = res.data.meals.map((mealJsonData: JSONMeal) => {
                    // use the utils function to retrieve the JSON data in a meal model
                    const meal: Meal = toMeals(mealJsonData);
                    return meal;
                })
                // set the state with the meals from the JSON Request
                setMeals(myMeals);
            }
          })
          .catch((err) => {
            throw err;
          })
    }

    return(
        <View>
            <SearchBar 
                placeholder="Search meal here..."
                onChangeText={updateSearch}
                value={search}
            />
            <Button
                title="Search a meal"
                onPress={() => searchBtn(search)}
            />
            {visible && <MealList mealList={meals} navigation={navigation} />}
        </View>
    )
}

export default SearchScreen;
import { JSONMeal, Meal } from "./types"

// Asssociate the meals with the JSON
export const toMeals = (jsonMeal: JSONMeal) => {
    const meal: Meal = {
        id: jsonMeal.idMeal,
        title: jsonMeal.strMeal,
        category: jsonMeal.strCategory,
        instructions: jsonMeal.strInstructions,
        thumbnail: jsonMeal.strMealThumb
    }
    return meal;
}
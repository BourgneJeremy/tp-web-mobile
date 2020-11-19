import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Meal } from '../models/types';
import { Card, Divider } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

export type DetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Details'
>

type Props = {
    id: string,
    title: string,
    category: string,
    instructions: string
    thumbnail: string
    navigation: DetailsScreenNavigationProp
}

// PB : Navigation with the button
export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    Random: undefined;
    Details: { meal: Meal };
  };

const MealItem: React.FC<Props> = ({ id, title, category, instructions, thumbnail, navigation}: Props) => {

    const meal: Meal = {
        id: id,
        title: title,
        category: category,
        instructions: instructions,
        thumbnail: thumbnail
    }
    return(
        <Card>
            <Card.Title title={title} subtitle={"Category: " + category} />
            <Card.Cover source={{ uri: thumbnail }} />
            <Card.Actions>
                <Button title="See more" onPress={() => navigation.navigate('Details', { meal })}>See more</Button> 
            </Card.Actions>
            <Divider />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red'
    }
})

export default MealItem;
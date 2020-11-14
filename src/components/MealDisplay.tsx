import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Meal } from '../models/types';
import { Card, Divider } from 'react-native-paper';
import { DetailsScreenNavigationProp } from '../screens/DetailsScreen';

type Props = {
    id: string,
    title: string,
    category: string,
    instructions: string
    thumbnail: string
}

const MealItem: React.FC<Props> = ({ id, title, category, instructions, thumbnail}) => {

    let navigation: DetailsScreenNavigationProp;

    const meal: Meal = {
        id: id,
        title: title,
        category: category,
        instructions: instructions,
        thumbnail: thumbnail
    }

    const SeeMore = () => navigation.navigate('Details', { meal });

    return(
        <Card>
            <Card.Title title={title} subtitle={"Category: " + category} />
            <Card.Cover source={{ uri: thumbnail }} />
            <Card.Actions>
                <Button title="See more" onPress={SeeMore}>See more</Button> 
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
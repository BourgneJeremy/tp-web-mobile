import React from 'react';
import { StyleSheet } from 'react-native';
import { Meal } from '../models/types';
import { Button, Card, Divider } from 'react-native-paper';

const MealItem: React.FC<Meal> = ({ title, category, thumbnail}) => {
    return(
        <Card>
            <Card.Title title={title} subtitle={"Category: " + category} />
            <Card.Cover source={{ uri: thumbnail }} />
            <Card.Actions>
                <Button>See more</Button> 
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
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Meal } from '../models/types';
import { Card, Divider, Paragraph, Title, Button, Chip } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons'; 
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export type DetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Details'
>

type Props = {
    meal: Meal
    // navigation prop here
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// PB : Navigation with the button
export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    Random: undefined;
    Details: { meal: Meal };
  };

const MealItem: React.FC<Props> = ({ meal, navigation}: Props) => {
    const route = useRoute();
    const displayInstructions = processInstructions(meal.instructions);
    const displayTags = processTags(meal.tags);

    return(
        <ScrollView>
            <Card>
                <Card.Title title={meal.title} subtitle={"Category: " + meal.category} />
                <Card.Cover source={{ uri: meal.thumbnail }} />
                { route.name == "Details" ? 
                    <Card.Content>
                        <Title>Instructions</Title>
                        <Divider style={{marginBottom: 8}} />
                        {displayTags != null ? <Chip icon="information" style={{marginBottom: 15}}>Tags: {displayTags}</Chip> : <></>}
                        {displayInstructions.map((instruction, key) => <Paragraph key={key} style={{color: "gray"}}><EvilIcons name="arrow-right" size={20} color="purple" /> {instruction}</Paragraph>)}
                    </Card.Content>
                    : 
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate("Details", { meal: meal }) }>See more</Button> 
                    </Card.Actions>
                }
                <Divider />
            </Card>
        </ScrollView>
    )
}

const processInstructions = (instructions: string) => {
    var arrInstructions = instructions.split(". ");
    arrInstructions.map(item => {
        var newItem = item.trimStart();
        if (item[item.length - 1] == ".") {
            newItem = item.slice(item.length - 1, 0);
        }

        if (newItem != "") {
            return newItem + ".";
        } else {
            return null;
        }
    })

    return arrInstructions;
}

const processTags = (tags: string) => {
    if (tags == null) {
        return null;
    } else if (tags.includes(",")) {
        return tags.replace(",", ", ");
    } else {
        return tags;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red'
    }
})

export default MealItem;
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Meal } from '../models/types';
import { Card, Divider, Paragraph, Title, Button } from 'react-native-paper';
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
    id: string,
    title: string,
    category: string,
    instructions: string
    thumbnail: string,
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

const MealItem: React.FC<Props> = ({ id, title, category, instructions, thumbnail, navigation}: Props) => {
    const route = useRoute();
    const meal: Meal = {
        id: id,
        title: title,
        category: category,
        instructions: instructions,
        thumbnail: thumbnail
    }
    
    const displayInstructions = processInstructions(instructions);

    return(
        <ScrollView>
            <Card>
                <Card.Title title={title} subtitle={"Category: " + category} />
                <Card.Cover source={{ uri: thumbnail }} />
                { route.name == "Details" ? 
                    <Card.Content>
                        <Title>Instructions</Title>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red'
    }
})

export default MealItem;
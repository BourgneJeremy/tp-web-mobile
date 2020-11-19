import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import { Meal } from '../models/types';
import { Card, Divider, Paragraph, Title } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
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
    
    return(
        <ScrollView>
            <Card>
                <Card.Title title={title} subtitle={"Category: " + category} />
                <Card.Cover source={{ uri: thumbnail }} />
                { route.name == "Details" ? 
                    <Card.Content>
                        <Title>Instructions</Title>
                        <Paragraph>{instructions}</Paragraph>
                    </Card.Content>
                    : 
                    <Card.Actions>
                        <Button title="See more" onPress={() => navigation.navigate("Details", { meal: meal }) }>See more</Button> 
                    </Card.Actions>
                }
                <Divider />
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red'
    }
})

export default MealItem;
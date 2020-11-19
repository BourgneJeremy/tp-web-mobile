import React from 'react';
import { View, Text, Button } from 'react-native';
import { Divider } from 'react-native-paper';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// FlatList test
const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return(
        <View>
            <Card>
                <Card.Content>
                    <Title style={{color: "purple"}}>Meals list</Title>
                    <Paragraph>Go search for meals recipes !</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' }} />
            </Card>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Button
                title="Search for a meal"
                onPress={() => navigation.navigate('Search')}>
            </Button>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Button
                title="Access to a random meal"
                onPress={() => navigation.navigate('Random') }>
            </Button>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
        </View>
    )
}
export default HomeScreen;
import React from 'react';
import { View, Text, Button } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// FlatList test
const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return(
        <View>
            <Button
                title="Go to Search"
                onPress={() =>
                    navigation.navigate('Search')
                }
            />
            <Text>-------------------------</Text>
            <Button
                title="Go to Random"
                onPress={() =>
                    navigation.navigate('Random')
                }
            />
        </View>
    )
}
export default HomeScreen;
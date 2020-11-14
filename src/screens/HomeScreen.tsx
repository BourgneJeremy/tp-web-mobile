import React from 'react';
import { View, Text, Button } from 'react-native';
import { Divider } from 'react-native-paper';
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
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Button
                title="Go to Random"
                onPress={() =>
                    navigation.navigate('Random')
                }
            />
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Button 
                title="Go to Details"
                onPress={() => 
                    navigation.navigate('Details', {
                        itemId: 86,
                        text: "Here is some text"
                    })
                }
            />
        </View>
    )
}
export default HomeScreen;
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Meal } from './src/models/types';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import RandomScreen from './src/screens/RandomScreen';

const RootStack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Random: undefined;
  Details: { meal: Meal }
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen
            name="Search"
            component={SearchScreen}
            />
          <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            />
          <RootStack.Screen
            name="Random"
            component={RandomScreen}
            />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

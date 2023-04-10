import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from '../tab-navigation/TabNavigation';
import { CharactersDetailsScreen } from "../../screens/characters-details-screen/CharactersDetailsScreen";
import { ComicsDetailsScreen } from "../../screens/comics-details-screen/ComicsDetailsScreen";

const Stack = createStackNavigator();
export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CharactersDetailsScreen" component={CharactersDetailsScreen} />
        <Stack.Screen name="ComicsDetailsScreen" component={ComicsDetailsScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

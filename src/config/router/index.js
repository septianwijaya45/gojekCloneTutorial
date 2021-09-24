import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsDetail} from '../../containers/pages';

const Stack = createNativeStackNavigator();
/*
    Stack ada 2:
    1. Page yang memiliki back menggunakan StackNavigator()
    2. Page yang tidak memiliki back menggunakan SwitchNavigator()
*/

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, initialRouteName: 'Home'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

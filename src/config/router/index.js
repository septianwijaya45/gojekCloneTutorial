import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsDetail, OrderDetail, Orders} from '../../containers/pages';
import {createSwitchNavigator} from 'react-navigation';

const Stack = createNativeStackNavigator();
/*
    Stack ada 2:
    1. Page yang memiliki back menggunakan StackNavigator()
    2. Page yang tidak memiliki back menggunakan SwitchNavigator()
*/

// const Router = createSwitchNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Home',
//   },
// );

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, initialRouteName: 'Home'}}
        />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

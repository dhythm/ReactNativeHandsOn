import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

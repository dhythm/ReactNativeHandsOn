import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import PicturePage from './pages/PicturePage';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Picture">
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Picture" component={PicturePage} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

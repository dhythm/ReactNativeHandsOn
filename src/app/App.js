import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import PicturePage from './pages/PicturePage';

const App = () => {
  return (
    <NavigationContainer>
      <PicturePage />
    </NavigationContainer>
  );
};

export default App;

import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import LoginPage from './pages/LoginPage';
import TabNavigator from './TabNavigator';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      {isLogin ? <TabNavigator /> : <LoginPage handleLogin={setIsLogin} />}
    </NavigationContainer>
  );
};

export default App;

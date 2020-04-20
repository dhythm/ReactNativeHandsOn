import Box from 'core/components/atoms/Box';
import React from 'react';
import { Button } from 'react-native-elements';
import LoginForm from './LazyLoginForm';

// const LoginForm = React.lazy(() => import('./LazyLoginForm'));

const LoginPage = ({ handleLogin }) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <LoginForm />
      <Box style={{ paddingVertical: 16, paddingHorizontal: 8 }}>
        <Button
          title="Login"
          onPress={() => {
            handleLogin(true);
          }}
        />
      </Box>
    </Box>
  );
};

export default LoginPage;

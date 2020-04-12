import Box from 'core/components/atoms/Box';
import React from 'react';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

const LoginPage = ({ handleLogin }) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Input
        placeholder="EMAIL"
        leftIcon={
          <IconWrapper>
            <Icon name="envelope-o" size={24} color="black" />
          </IconWrapper>
        }
      />
      <Input
        placeholder="PASSWORD"
        leftIcon={
          <IconWrapper>
            <Icon name="lock" size={24} color="black" />
          </IconWrapper>
        }
      />
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

const IconWrapper = styled(Box).attrs(() => ({
  alignItems: 'center',
}))`
  width: 24px;
  margin-right: 8px;
`;

export default LoginPage;

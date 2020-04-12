import Box from 'core/components/atoms/Box';
import React from 'react';
import { Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button
        title="Check Detail"
        onPress={() => navigation.navigate('DetailPage')}
      />
    </Box>
  );
};

export default HomePage;

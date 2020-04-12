import Box from 'core/components/atoms/Box';
import Loading from 'core/components/atoms/Loading';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    fetch('https://source.unsplash.com/random').then((response) => {
      setImageUrl(response?.url);
    });
  }, []);

  if (!imageUrl) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Image
        style={styles.img}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
    </Box>
  );
};

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  img: {
    width,
    height,
  },
});

export default App;

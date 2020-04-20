import Box from 'core/components/atoms/Box';
import React, { Suspense, useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

const fetchImage = () => {
  const promise = fetch('https://source.unsplash.com/random');
  return wrapPromise(promise);
};

const wrapPromise = (promise) => {
  let status = 'pending';
  let result;

  const suspender = promise.then(
    (r) => {
      status = 'fulfilled';
      result = r;
    },
    (e) => {
      status = 'rejected';
      result = e;
    },
  );

  const read = () => {
    if (status === 'pending') {
      throw suspender;
    } else if (status === 'rejected') {
      throw result;
    } else {
      return result;
    }
  };

  return { read };
};

const imageResource = fetchImage();

const LoginForm = () => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const data = imageResource.read();
  const { url } = data;

  url &&
    Image.getSize(url, (_width, _height) => {
      setWidth(_width);
      setHeight(_height);
    });

  console.log({ screenWidth, width, height });
  const ratio = height && width ? height / width : 1;

  return (
    <>
      <View style={{ flexShrink: 1, backgroundColor: 'grey' }}>
        <Image
          style={{
            width: screenWidth,
            height: screenWidth * ratio,
          }}
          source={{ uri: data.url }}
          resizeMode="contain"
        />
      </View>
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
    </>
  );
};

const LazyLoginForm = () => (
  <Suspense fallback={<Text>Now loading...</Text>}>
    <LoginForm />
  </Suspense>
);

const IconWrapper = styled(Box).attrs(() => ({
  alignItems: 'center',
}))`
  width: 24px;
  margin-right: 8px;
`;

const { width: screenWidth } = Dimensions.get('screen');

export default LazyLoginForm;

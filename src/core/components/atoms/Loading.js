import loadingDots from 'core/assets/animations/loading-dots.json';
import LottieView from 'lottie-react-native';
import React from 'react';

const Loading = () => {
  return <LottieView source={loadingDots} autoPlay loop />;
};

export default Loading;

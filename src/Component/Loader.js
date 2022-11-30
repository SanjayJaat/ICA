import {ActivityIndicator} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../Utils/Constant';
import {black} from '../Utils/Color';

export default function Loader({visible}) {
  return visible ? (
    
    <ActivityIndicator
      size="large"
      style={{
        height: HEIGHT,
        width: WIDTH,
        position: 'absolute',
        backgroundColor: black + 90,
        zIndex: 20,
      }}
    />
  ) : null;
}

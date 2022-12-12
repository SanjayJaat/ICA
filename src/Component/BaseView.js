import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {black, green, white} from '../Utils/Color';

export default function BaseView({children, style}) {
  return (
    <View style={[{flex: 1, backgroundColor: 'black'}, style]}>
      <StatusBar backgroundColor={white} barStyle={'dark-content'} />
      {children}
    </View>
  );
}

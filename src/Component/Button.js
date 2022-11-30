import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from './Text';
import React from 'react';
import {WIDTH} from '../Utils/Constant';
import {black, green, white} from '../Utils/Color';

export default function Button({
  style,
  textStyle,
  lable,
  color = white,
  onPress,
  ...rest
}) {
  return (
    <TouchableOpacity {...rest} onPress={onPress} style={[styles.touch, style]}>
      <Text h1 color={color + 90} fw={'600'} style={[styles.texts, textStyle]}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: {
    borderWidth: 0.5,
    width: WIDTH / 1.2,
    height: 50,
    backgroundColor: green,
    borderStyle: 'solid',
    marginTop: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    textAlign: 'center',
    // fontFamily: 'serif',
  },
});

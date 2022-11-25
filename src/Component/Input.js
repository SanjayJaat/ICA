import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {WIDTH} from '../Utils/Constant';

export default function Input({
  placeholder,
  email,
  phone,
  style,
  value,
  setValue,
  ...rest
}) {
  let keyboardType = 'default';
  if (placeholder === 'Password') {
    keyboardType = 'numeric';
  }

  if (placeholder === 'Username') {
    keyboardType = 'email-adderes';
  }

  return (
    <TextInput
      {...rest}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: WIDTH / 1.2,
    height: 50,
    margin: 10,
    fontSize: 20,

    padding: 10,
    color: 'black',
    fontFamily: 'serif',
    backgroundColor: '#dfffe4',
    borderRadius: 10,
  },
});

import React from 'react';
import {View, Text} from 'react-native';


export default class Home extends React.Component {
  render() {
    return (
      <View style={{marginTop: 100, alignSelf: 'center'}}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>this is home</Text>
      </View>
    );
  }
}

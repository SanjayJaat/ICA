import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../Component/Button';

export default class Home extends React.Component {
  render() {
    console.log(auth().currentUser, 'userss====');

    return (
      <View style={{marginTop: 100, alignSelf: 'center'}}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>this is home</Text>
        <Text style={{fontSize: 40, textAlign: 'center'}}>
          {auth().currentUser?.email}
        </Text>
        <Button
          lable={'Logout'}
          onPress={() => {
            auth().signOut();
            this.props.navigation.goBack();
          }}></Button>
      </View>
    );
  }
}

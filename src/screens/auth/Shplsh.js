import React from 'react';
import {View, Text, Image} from 'react-native';

export default class Shples extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 5000);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Image
          style={{width: 200, height: 200, alignSelf: 'center', marginTop: 230}}
          source={require('../../Image/logoica.png')}></Image>
      </View>
    );
  }
}

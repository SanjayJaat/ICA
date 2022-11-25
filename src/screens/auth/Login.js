import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BaseView from '../../Component/BaseView';
import Text from '../../Component/Text';
import {black, navy, red} from '../../Utils/Color';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import {sizes} from '../../Utils/Typograpy';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // if (username == '' || password == '') {
    //   alert('please enter Data');
    // }
    if (username == '') {
      alert('enter your email');
    } else if (password == '') {
      alert('enter your password');
    } else {
    }
  };

  return (
    <BaseView style={styles.view}>
      <Text color={red} mt={100} h1 style={styles.welcome} numberOfLines={1}>
        Welcome
      </Text>

      <Input
        value={username}
        setValue={setUsername}
        placeholder="Username"></Input>
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry={true}></Input>
      <Button onPress={login} lable={'Login'} />

      <Button
        lable={'Create Account'}
        textStyle={styles.text2}
        style={{backgroundColor: black}}
        onPress={() => navigation.navigate('Create Account')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Text style={styles.text1}>
          {' '}
          Forgot:{' '}
          <Text style={{textDecorationLine: 'underline', color: 'red'}}>
            Password
          </Text>
        </Text>
      </TouchableOpacity>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  text: {
    width: 300,
    height: 50,
    borderColor: 'rgbe(0,0,0,3)',
    margin: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 10,
    color: 'black',
    fontFamily: 'serif',
    backgroundColor: '#dfffe4',
    borderRadius: 10,
  },
  view: {
    alignItems: 'center',
    // width:300,
    // height:300
  },
  welcome: {
    marginBottom: 30,
    fontStyle: 'italic',

    textAlign: 'center',
    fontFamily: 'serif',
  },
  touch: {
    borderWidth: 0.5,
    width: 303,
    height: 50,
    backgroundColor: '#ba5555',
    borderStyle: 'solid',
    marginTop: 50,
  },

  texts: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  text1: {
    fontSize: 20,
    fontFamily: 'serif',

    marginTop: 50,
    color: 'white',
  },
  image: {
    flex: 1,
  },
  text2: {
    fontSize: sizes.h2,
    textDecorationLine: 'underline',
    color: '#dd6677',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
});
export default Login;

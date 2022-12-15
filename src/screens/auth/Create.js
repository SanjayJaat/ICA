import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BaseView from '../../Component/BaseView';
import Text from '../../Component/Text';
import {white} from '../../Utils/Color';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import Loader from '../../Component/Loader';
import {CreateUser} from '../../Network/auth';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {createValidatin} from '../../Validation/auth';

const Create = ({navigation}) => {
  const [name, setname] = useState(-__DEV__ ? 'Sanjay' : '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirm, setComfirm] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    // if (
    //   name.trim() === '' ||
    //   (name == 'nul' && email.trim() == '') ||
    //   (email == 'null' && password.trim() == '') ||
    //   (password == 'null' && comfirm.trim() == '') ||
    //   comfirm == 'null'
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Create',
    //     text2: 'Plz Enter Data👋',
    //   });
    // } else if (password !== comfirm) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Password',
    //     text2: 'Plz Enter Data👋',
    //   });
    // } else {
    // try {
    //   setLoading(true);
    //   const res = await CreateUser(email, password);
    //   console.log(res, 'usercreate');
    //   setLoading(false);
    // } catch (error) {
    //   console.log(error, 'createusererror');
    //   setLoading(false);
    // }

    // setLoading(true);
    let data = {email, password, name, number, comfirm};
    let error = createValidatin(data);
    // CreateUser(data)
    //   .then(res => {
    //     console.log(res, 'usercreate');
    //     Toast.show({
    //       type: 'success',
    //       text1: 'Create',
    //       text2: 'your are welcome',
    //     });
    //     navigation.navigate('Home');

    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.log(error, 'createusererror');
    //     Toast.show({
    //       type: 'error',
    //       text1: 'Create',
    //       text2: error.message,
    //     });
    //     setLoading(false);
    //   });
    console.log(error);

    // // setTimeout(() => {
    //   setLoading(false);
    //   navigation.replace('Login');
    // }, 3000);
    // }
  };
  //console.log(auth().currentUser, 'userss====');
  return (
    <BaseView style={styles.BaseView}>
      <Loader visible={loading} />
      <Text h1 mt={50} ta={'center'} color={white}>
        Create Account
      </Text>

      <Input value={name} setValue={setname} placeholder={'Enter your name'} />
      <Input
        keyboardType={'numeric'}
        setValue={setNumber}
        placeholder={'Enter your number'}
      />
      <Input setValue={setEmail} placeholder={'Enter your email'} />
      <Input
        isPassword
        value={password}
        setValue={setPassword}
        placeholder={'Password'}
      />
      <Input
        isPassword
        value={comfirm}
        setValue={setComfirm}
        placeholder={'Confirm password'}
      />

      <Button lable={'submit'} onPress={submit} />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  BaseView: {
    alignItems: 'center',
  },
});

export default Create;

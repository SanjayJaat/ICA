import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BaseView from '../../Component/BaseView';
import Text from '../../Component/Text';
import {white} from '../../Utils/Color';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import Loader from '../../Component/Loader';

const Create = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirm, setComfirm] = useState('');

  const submit = () => {
    if (name === '' && email == '' && password == '' && comfirm == '') {
      alert('plz enter data');
    } else {
    }
  };

  return (
    <BaseView style={styles.BaseView}>
      <Loader />
      <Text h1 mt={50} ta={'center'} color={white}>
        Create Account
      </Text>

      <Input setValue={setname} placeholder={'Enter your name'} />
      <Input setValue={setEmail} placeholder={'Enter your email'} />
      <Input setValue={setPassword} placeholder={'Password'} />
      <Input setValue={setComfirm} placeholder={'Confirm password'} />

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

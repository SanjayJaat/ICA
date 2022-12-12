import auth from '@react-native-firebase/auth';
export const CreateUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        resolve('Success');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          reject({massage: 'That email address is already in use!'});
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          reject({massage: 'That email address is invalid!'});
        }
      });
  });
};
export const SignInUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error.message);
      });
  });
};

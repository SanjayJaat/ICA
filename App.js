import Create from './src/screens/auth/Create';
import Login from './src/screens/auth/Login';
import Shplsh from './src/screens/auth/Shplsh';
import Forget from './src/screens/auth/Forget';
import About from './src/screens/About';
import Courses from './src/screens/Courses';
import Home from './src/screens/Home';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="shples" component={Shplsh} />
        <Stack.Screen name="Create Account" component={Create} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}
        />
        <Stack.Screen name="About page" component={About} />
        <Stack.Screen name="Forget page" component={Forget} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Courses page" component={Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

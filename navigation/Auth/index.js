import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../../components/pages/Auth/SignIn';
import SignUp from '../../components/pages/Auth/SignUp';
import {routes} from '../routes';

const {AUTH_NAVIGATION} = routes;

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AUTH_NAVIGATION.SIGN_IN} component={SignIn} />
      <Stack.Screen name={AUTH_NAVIGATION.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;

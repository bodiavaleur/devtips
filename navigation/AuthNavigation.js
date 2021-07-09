import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SignUp';
import {routes} from './routes';

const {AUTH_NAVIGATION} = routes;

const Stack = createStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AUTH_NAVIGATION.SIGN_IN} component={SignIn} />
      <Stack.Screen name={AUTH_NAVIGATION.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
}

AuthNavigation.propTypes = {};

export default AuthNavigation;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../../components/pages/Welcome';
import {routes} from '../routes';

const {WELCOME_NAVIGATION} = routes;

const Stack = createStackNavigator();

function WelcomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={WELCOME_NAVIGATION.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
}

export default WelcomeNavigation;

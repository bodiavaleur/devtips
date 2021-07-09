import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Theme} from '../theme';
import WelcomeNavigation from './WelcomeNavigation';
import AuthNavigation from './AuthNavigation';
import {routes} from './routes';

const {WELCOME_NAVIGATION, AUTH_NAVIGATION} = routes;

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={WELCOME_NAVIGATION.ROOT}
          component={WelcomeNavigation}
        />
        <Stack.Screen name={AUTH_NAVIGATION.ROOT} component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

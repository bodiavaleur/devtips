import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Theme} from '../theme';
import {routes} from './routes';
import {navigationRef} from './navigationRef';
import WelcomeNavigation from './Welcome';
import AuthNavigation from './Auth';
import TipsNavigation from './Tips';

const {WELCOME_NAVIGATION, AUTH_NAVIGATION, TIPS_NAVIGATION} = routes;

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer theme={Theme} ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={WELCOME_NAVIGATION.ROOT}
          component={WelcomeNavigation}
        />
        <Stack.Screen name={AUTH_NAVIGATION.ROOT} component={AuthNavigation} />
        <Stack.Screen name={TIPS_NAVIGATION.ROOT} component={TipsNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

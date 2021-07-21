import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './routes';
import AllTips from '../components/pages/AllTips';

const {TIPS_NAVIGATION} = routes;

const Stack = createStackNavigator();

function TipsNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TIPS_NAVIGATION.ALL_TIPS} component={AllTips} />
    </Stack.Navigator>
  );
}

export default TipsNavigation;

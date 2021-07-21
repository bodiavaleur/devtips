import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../routes';
import AllTips from '../../components/pages/AllTips';
import Header from '../../components/organisms/Header';

const {TIPS_NAVIGATION} = routes;

const Stack = createStackNavigator();

function TipsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={TIPS_NAVIGATION.ALL_TIPS}
        component={AllTips}
        options={Header}
      />
    </Stack.Navigator>
  );
}

export default TipsNavigation;

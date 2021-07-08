import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {appStyles, Theme} from './theme';
import {StatusBar, View} from 'react-native';
import Welcome from './components/pages/Welcome';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={Theme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

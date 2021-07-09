import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import RootNavigation from './navigation/RootNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootNavigation />
    </>
  );
}

export default App;

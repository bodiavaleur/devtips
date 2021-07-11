import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

export function SignIn() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/auth-bg.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%', position: 'absolute'}}
      />
      <Text>sign in qwe</Text>
    </View>
  );
}

export default SignIn;

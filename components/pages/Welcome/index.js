import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import WelcomeLogo from '../../../assets/welcome-logo.svg';
import Button from '../../atoms/Button';
import {Title, Text} from '../../atoms/Typography';
import {routes} from '../../../navigation/routes';

const {AUTH_NAVIGATION} = routes;
function Welcome({navigation}) {
  const getStartedClick = () =>
    navigation.replace(AUTH_NAVIGATION.ROOT, {screen: AUTH_NAVIGATION.SIGN_IN});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View>
          <WelcomeLogo height={320} style={styles.welcomeImage} />
        </View>
        <View style={styles.welcomeText}>
          <Title size={2.5} margin="normal">
            Daily tips
          </Title>
          <Text lowOpacity>
            Share best practices, save tips, collect as favorites and more!
          </Text>
        </View>
        <Button title="Get Started" onPress={getStartedClick} />
      </View>
    </SafeAreaView>
  );
}

export default Welcome;

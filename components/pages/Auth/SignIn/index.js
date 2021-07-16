import React from 'react';
import {ImageBackground, SafeAreaView, TextInput, View} from 'react-native';
import styles from './styles';
import Button from '../../../atoms/Button';
import GoogleIcon from '../../../../assets/google-icon.svg';
import DevtipsLogo from '../../../../assets/devtips-logo.svg';
import {useFormik} from 'formik';
import {initialValues, validationSchema} from './config';
import Input from '../../../atoms/Input';
import {Title} from '../../../atoms/Typography';
import {Auth} from '../../../../api/firebase/Auth';
import {useDispatch} from 'react-redux';
import {signIn} from '../../../../redux/slices/auth';
export function SignIn() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/auth-bg.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%', position: 'absolute'}}
      />
      <SafeAreaView style={styles.authContainer}>
        <View>
          <DevtipsLogo />
        </View>
        <View>
          <Input
            marginY="small"
            placeholder="Email"
            autoCompleteType="email"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            marginY="small"
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
          <Button title="Sign in" marginY="normal" />
        </View>
        <View>
          <Button
            title="Sign in with Google"
            icon={GoogleIcon}
            onPress={() =>
              Auth.signInWithGoogle().then(r => dispatch(signIn(r)))
            }
          />
        </View>
        <View></View>
      </SafeAreaView>
    </View>
  );
}

export default SignIn;

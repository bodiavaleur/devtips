import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {FB_GOOGLE_AUTH_CLIENT_ID} from './config';

GoogleSignin.configure({
  iosClientId: FB_GOOGLE_AUTH_CLIENT_ID,
});

class AuthAPI {
  async signInWithGoogle() {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      return auth().currentUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export const Auth = new AuthAPI();

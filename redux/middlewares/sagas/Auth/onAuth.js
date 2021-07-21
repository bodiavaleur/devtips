import {call, put} from 'redux-saga/effects';
import {Auth} from '../../../../api/firebase/Auth';
import {setSignedInUser} from '../../../slices/auth';
import {replace} from '../../../../navigation/navigationRef';
import {routes} from '../../../../navigation/routes';

const {TIPS_NAVIGATION} = routes;

function* onAuth() {
  const signInUser = yield call(Auth.signInWithGoogle);

  if (signInUser) {
    yield put(setSignedInUser(signInUser));
    yield call(replace, TIPS_NAVIGATION.ROOT, TIPS_NAVIGATION.ALL_TIPS);
  }
}

export default onAuth;

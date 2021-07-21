import {takeLatest} from 'redux-saga/effects';
import {SIGN_IN} from '../../../actions/auth';
import onAuth from './onAuth';

function* authSaga() {
  yield takeLatest(SIGN_IN, onAuth);
}

export default authSaga;

import {createSlice} from '@reduxjs/toolkit';
import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERROR,
} from '../actions/auth';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [SIGN_IN]: (state, {payload}) => {
      state.user = {
        displayName: payload.displayName,
        email: payload.email,
        photoURL: payload.metadata?.photoURL,
      };
    },
    [SIGN_UP]: (state, payload) => {
      console.log(state, payload);
    },
    [SIGN_OUT]: (state, payload) => {
      console.log(state, payload);
    },
    [SIGN_IN_ERROR]: (state, payload) => {
      console.log(state, payload);
    },
    [SIGN_UP_ERROR]: (state, payload) => {
      console.log(state, payload);
    },
  },
});

export const {
  [SIGN_IN]: signIn,
  [SIGN_UP]: signUp,
  [SIGN_OUT]: signOut,
  [SIGN_IN_ERROR]: signInError,
  [SIGN_UP_ERROR]: signUpError,
} = authSlice.actions;

console.log(authSlice);

export const {name: authName, reducer: authReducer} = authSlice;

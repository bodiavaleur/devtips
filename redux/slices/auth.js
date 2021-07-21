import {createSlice} from '@reduxjs/toolkit';
import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERROR,
  SET_SIGNED_IN_USER,
} from '../actions/auth';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [SET_SIGNED_IN_USER]: (state, {payload}) => {
      state.user = payload;
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
  [SET_SIGNED_IN_USER]: setSignedInUser,
  [SIGN_IN_ERROR]: signInError,
  [SIGN_UP_ERROR]: signUpError,
} = authSlice.actions;

export const {name: authName, reducer: authReducer} = authSlice;

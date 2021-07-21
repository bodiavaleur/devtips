import {createAction} from '@reduxjs/toolkit';

export const SIGN_IN = createAction('auth/SIGN_IN');
export const SIGN_UP = createAction('auth/SIGN_UP');
export const SIGN_OUT = createAction('auth/SIGN_OUT');

export const SET_SIGNED_IN_USER = createAction('auth/SET_SIGNED_IN_USER');

export const SIGN_IN_ERROR = createAction('auth/SIGN_IN_ERROR');
export const SIGN_UP_ERROR = createAction('auth/SIGN_UP_ERROR');

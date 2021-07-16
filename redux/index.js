import {configureStore} from '@reduxjs/toolkit';
import {authName, authReducer} from './slices/auth';

export const store = configureStore({
  reducer: {
    [authName]: authReducer,
  },
});

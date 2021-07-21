import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authName, authReducer} from './slices/auth';
import createSagaMiddleware from 'redux-saga';
import runSagas from './middlewares/sagas/';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [authName]: authReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});

runSagas(sagaMiddleware);

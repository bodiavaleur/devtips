import React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(navigator, screen) {
  return navigationRef.current?.navigate(navigator, {screen});
}

export function replace(navigator, screen) {
  return navigationRef.current?.dispatch(
    StackActions.replace(navigator, {screen}),
  );
}

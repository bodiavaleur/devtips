import {DefaultTheme} from '@react-navigation/native';
import {StyleSheet, PixelRatio} from 'react-native';

export const REM_VALUE = 16;

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1F1D2B',
    primary: '#706FC8',
    primaryTranslucent: 'rgba(112,111,200, .65)',
    primaryPlaceholder: '#8989cb',
    red: 'rgb(255,49,58)',
    gray: '#9593A2',
    text: '#FFFFFF',
    secondary: '#FEC14B',
  },
};

export const appStyles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
  },
});

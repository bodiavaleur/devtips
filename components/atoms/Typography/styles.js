import {StyleSheet} from 'react-native';
import {REM_VALUE, Theme} from '../../../theme';
import {adjustMargins, adjustSize} from './helpers';

const titleDefaults = {
  fontFamily: 'Quicksand',
  fontWeight: 'bold',
  fontSize: REM_VALUE * 2.5,
  color: Theme.colors.text,
};

const textDefaults = {
  fontFamily: 'Quicksand',
  fontSize: REM_VALUE,
  color: Theme.colors.text,
};

const styles = StyleSheet.create({
  title: ({size, margin}) => ({
    ...titleDefaults,
    fontSize: adjustSize(size, titleDefaults.fontSize),
    marginVertical: adjustMargins(margin),
  }),
  text: ({size, lowOpacity, margin}) => ({
    ...textDefaults,
    fontSize: adjustSize(size, textDefaults.fontSize),
    marginVertical: adjustMargins(margin),
    opacity: lowOpacity ? 0.5 : 1,
  }),
});

export default styles;

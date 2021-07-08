import {StyleSheet} from 'react-native';
import {REM_VALUE, Theme} from '../../../theme';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 32,
    backgroundColor: Theme.colors.primary,
  },
  buttonText: {
    fontFamily: 'Quicksand',
    fontSize: REM_VALUE,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
});

export default styles;

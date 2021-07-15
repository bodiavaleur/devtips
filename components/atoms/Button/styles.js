import {StyleSheet} from 'react-native';
import {REM_VALUE, Theme} from '../../../theme';
import {adjustMargins} from '../Typography/helpers';

const styles = StyleSheet.create({
  button: ({marginX, marginY}) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: adjustMargins(marginX),
    marginVertical: adjustMargins(marginY),
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 32,
    backgroundColor: Theme.colors.primary,
  }),
  buttonText: {
    fontFamily: 'Quicksand',
    fontSize: REM_VALUE,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  buttonIcon: {
    marginRight: 8,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {REM_VALUE, Theme} from '../../../theme';
import {adjustMargins, selectVariant} from '../Typography/helpers';

const styles = StyleSheet.create({
  button: ({marginX, marginY, variant}) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: adjustMargins(marginX),
    marginVertical: adjustMargins(marginY),
    ...selectVariant(variant),
  }),
  buttonText: {
    fontFamily: 'Quicksand',
    fontSize: REM_VALUE,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  buttonIcon: {
    marginRight: REM_VALUE * 0.5,
  },
});

export default styles;

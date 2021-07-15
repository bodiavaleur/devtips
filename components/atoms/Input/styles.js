import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';
import {adjustMargins} from '../Typography/helpers';

const errorStyle = isError =>
  isError
    ? {
        borderColor: Theme.colors.red,
        borderWidth: 1,
      }
    : {};

const styles = StyleSheet.create({
  inputContainer: ({marginX, marginY}) => ({
    marginHorizontal: adjustMargins(marginX),
    marginVertical: adjustMargins(marginY),
    alignItems: 'center',
  }),

  input: ({error}) => ({
    width: 256,
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: Theme.colors.primaryTranslucent,
    color: Theme.colors.text,
    ...errorStyle(error),
  }),
});

export default styles;

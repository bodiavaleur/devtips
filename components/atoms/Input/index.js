import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {Theme} from '../../../theme';
import {Text} from '../Typography';

function Input({marginX, marginY, error, helperText, ...rest}) {
  return (
    <View style={styles.inputContainer({marginX, marginY})}>
      <TextInput
        style={styles.input({marginX, marginY, error})}
        placeholderTextColor={Theme.colors.primaryPlaceholder}
        {...rest}
      />
      {error && (
        <Text error size={0.85} margin="xs">
          {error}
        </Text>
      )}
    </View>
  );
}

export default Input;

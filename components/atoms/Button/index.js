import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function Button({title, icon: Icon, marginX, marginY, ...rest}) {
  return (
    <TouchableOpacity style={styles.button({marginX, marginY})} {...rest}>
      {Icon && <Icon style={styles.buttonIcon} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

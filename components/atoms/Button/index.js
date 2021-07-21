import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function Button({title, icon: Icon, marginX, marginY, variant, ...rest}) {
  return (
    <TouchableOpacity
      style={styles.button({marginX, marginY, variant})}
      {...rest}>
      {Icon && <Icon style={styles.buttonIcon} />}
      {title && <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  variant: 'filled',
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  marginX: PropTypes.oneOf(['xs', 'small, normal', 'large']),
  marginY: PropTypes.oneOf(['xs', 'small, normal', 'large']),
  variant: PropTypes.oneOf(['filled', 'text']),
};

export default Button;

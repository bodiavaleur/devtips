import React from 'react';
import PropTypes from 'prop-types';

import {Text as NativeText} from 'react-native';
import styles from './styles';

export function Title({children, size, margin, ...rest}) {
  return (
    <NativeText style={styles.title({size, margin})} {...rest}>
      {children}
    </NativeText>
  );
}

export function Text({children, size, lowOpacity, margin, ...rest}) {
  return (
    <NativeText style={styles.text({size, lowOpacity, margin})} {...rest}>
      {children}
    </NativeText>
  );
}

Title.propTypes = {
  size: PropTypes.number,
  margin: PropTypes.oneOf(['small', 'normal', 'large']),
};

Text.propTypes = {
  size: PropTypes.number,
  margin: PropTypes.oneOf(['small', 'normal', 'large']),
};

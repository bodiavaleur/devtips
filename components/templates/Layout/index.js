import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

function Layout({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default Layout;

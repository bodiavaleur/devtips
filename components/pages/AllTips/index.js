import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Layout from '../../templates/Layout';

function AllTips() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>all tips</Text>
      </View>
    </Layout>
  );
}

export default AllTips;

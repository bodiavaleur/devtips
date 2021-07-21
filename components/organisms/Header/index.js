import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {routeLabels} from '../../../navigation/routes';
import {Theme} from '../../../theme';
import SearchIcon from '../../../assets/search-icon.svg';
import Button from '../../atoms/Button';
import {Title} from '../../atoms/Typography';

function Header({route}) {
  return {
    headerBackTitleVisible: false,
    headerTitle: () => <Title size={2}>{routeLabels[route.name]}</Title>,
    headerTitleAlign: 'left',
    headerTintColor: Theme.colors.text,
    headerStyle: {
      backgroundColor: Theme.colors.background,
      shadowOffset: {height: 0, width: 0},
    },
    headerRight: () => (
      <View style={styles.rightContainer}>
        <Button icon={SearchIcon} variant="text" marginX="xs" />
        <Button icon={SearchIcon} variant="text" marginX="xs" />
      </View>
    ),
  };
}

export default Header;

import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Text} from '../Typography';
import {useNavigation} from '@react-navigation/native';

export function Link({children, to}) {
  const navigation = useNavigation();

  const onNavigateTo = () => navigation.navigate(to);

  return (
    <TouchableOpacity onPress={onNavigateTo}>
      <Text link>{children}</Text>
    </TouchableOpacity>
  );
}

export default Link;

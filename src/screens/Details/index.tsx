import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const Details: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
    </View>
  );
};

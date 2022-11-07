import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const DetailScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

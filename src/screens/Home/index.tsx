import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles';
import {HomeScreenProps} from '../../router/types';

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const goToDetails = () => navigation.navigate('Detail');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title='to detail' onPress={goToDetails} />
    </View>
  );
};

import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Team} from '@models/Team';
import {DashboardScreenProps} from '@router/types';
import {getTeams} from '@services/api';
import {APP_IMAGES} from '@assets/index';
import {styles} from './styles';

export const Dashboard: FC<DashboardScreenProps> = ({navigation}) => {
  const [teams, setTeams] = useState<Team[]>([]);

  const goToDetails = () => navigation.navigate('Details');

  const renderItem = ({item}: {item: Team}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={goToDetails}>
        {item.crest ? (
          <Image style={styles.logo} source={{uri: item.crest}} />
        ) : (
          <Image style={styles.logo} source={APP_IMAGES.defaultImage} />
        )}
        <Text style={styles.title}>{item.shortName}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getTeams().then(response => setTeams(response));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teams}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

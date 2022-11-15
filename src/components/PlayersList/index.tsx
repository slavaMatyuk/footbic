import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Player} from '@models/GetCurrentTeamResponse';
import {styles} from './styles';

type Prop = {
  players: Player[];
};

export const PlayersList: FC<Prop> = ({players}) => {
  return (
    <View style={styles.container}>
      {players.map(({name, id}) => (
        <View style={styles.row} key={id}>
          <Text style={styles.text}>{name}</Text>
        </View>
      ))}
    </View>
  );
};

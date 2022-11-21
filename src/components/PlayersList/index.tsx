import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Player} from '@models/getCurrentTeamResponse';
import {styles} from './styles';

interface PlayersListProp {
  players: Player[];
}

export const PlayersList: FC<PlayersListProp> = ({players}) => {
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

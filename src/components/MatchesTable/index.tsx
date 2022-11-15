import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Match} from '@models/common/Match';
import {styles} from './styles';
import {formatDate} from '@utils/formatDate';

type Prop = {
  matches: Match[];
  teamShortName: string;
};

export const MatchesTable: FC<Prop> = ({matches, teamShortName}) => {
  const renderRow = ({id, utcDate, competition, awayTeam, homeTeam}: Match) => (
    <View style={styles.row} key={id}>
      <Text style={styles.cell}>{formatDate(utcDate)}</Text>
      <Text style={styles.cell}>
        {awayTeam.shortName === teamShortName
          ? homeTeam.shortName
          : awayTeam.shortName}
      </Text>
      <Text style={styles.lastCell}>{competition.name.split(' ')[0]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.title}>Rival</Text>
        <Text style={styles.title}>Cup</Text>
      </View>
      {matches.map(match => renderRow(match))}
    </View>
  );
};

import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Match} from '@models/common/match.interface';
import {formatDate} from '@utils/formatDate';
import {styles} from './styles';

interface MatchesListProp {
  matches: Match[];
  teamShortName: string;
}

export const MatchesList: FC<MatchesListProp> = ({matches, teamShortName}) => {
  const renderRow = ({id, utcDate, competition, awayTeam, homeTeam}: Match) => (
    <View style={styles.card} key={id}>
      <Text style={styles.rowTitle}>{`Date: ${formatDate(utcDate)}`}</Text>
      <Text style={styles.rowTitle}>
        {`Rival Team: ${
          awayTeam.shortName === teamShortName
            ? homeTeam.shortName
            : awayTeam.shortName
        }`}
      </Text>
      <Text style={styles.rowTitle}>{`Cup: ${competition.name}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {matches.map(match => renderRow(match))}
    </View>
  );
};

import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DetailsScreenProps} from '@router/types';
import {getCurrentTeamByIdAction} from '@store/actions/getCurrentTeamById';
import {getUpcomingMatchesAction} from '@store/actions/getUpcomingMatches';
import {
  currentTeamSelector,
  isLoadingCurrentTeamSelector,
} from '@store/selectors/getCurrentTeamByIdSelector';
import {
  isLoadingMatchesSelector,
  matchesSelector,
} from '@store/selectors/getUpcomingMatchesSelector';
import {MatchesTable} from '@components/MatchesTable';
import {PlayersList} from '@components/PlayersList';
import {THEME} from '@styles/theme';
import {styles} from './styles';

export const Details: FC<DetailsScreenProps> = ({route}) => {
  const {teamID} = route.params;

  const isLoadingTeam = useSelector(isLoadingCurrentTeamSelector);
  const isLoadingMatches = useSelector(isLoadingMatchesSelector);
  const currentTeam = useSelector(currentTeamSelector);
  const downloadedMatches = useSelector(matchesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentTeamByIdAction.request(teamID));
    dispatch(getUpcomingMatchesAction.request(teamID));
  }, [dispatch, teamID]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {isLoadingTeam ? (
          <ActivityIndicator size='large' color={THEME.PRIMARY_ALT} />
        ) : currentTeam?.id ? (
          <>
            <Image style={styles.logo} source={{uri: currentTeam.crest}} />
            <Text style={styles.title}>{currentTeam.name}</Text>
            <Text style={styles.subtitle}>Players</Text>
            <PlayersList players={currentTeam.squad} />
            {isLoadingMatches ? (
              <ActivityIndicator size='large' color={THEME.PRIMARY_ALT} />
            ) : (
              <Text style={styles.subtitle}>Upcoming matches</Text>
            )}
            {downloadedMatches ? (
              <MatchesTable
                matches={downloadedMatches}
                teamShortName={currentTeam.shortName}
              />
            ) : (
              <Text style={styles.text}>No data</Text>
            )}
          </>
        ) : (
          <Text style={styles.subtitle}>No data</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

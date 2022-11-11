import React, {FC, useEffect} from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DetailsScreenProps} from '@router/types';
import {getCurrentTeamByIdAction} from '@store/actions/getCurrentTeamById';
import {
  currentTeamSelector,
  isLoadingCurrentTeamSelector,
} from '@store/selectors/getCurrentTeamByIdSelector';
import {styles} from './styles';

export const Details: FC<DetailsScreenProps> = ({route}) => {
  const {teamID} = route.params;

  const isLoading = useSelector(isLoadingCurrentTeamSelector);
  const currentTeam = useSelector(currentTeamSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentTeamByIdAction.request(teamID));
  }, [dispatch, teamID]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{uri: ''}} />
      <Text style={styles.title}>{teamID}</Text>
    </SafeAreaView>
  );
};

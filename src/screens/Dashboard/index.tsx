import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AppRoutes} from '@router/index';
import {RootStackParamList} from '@router/types';
import {
  isLoadingTeamsSelector,
  teamsSelector,
} from '@store/selectors/getTeamsSelectors';
import {getTeamsAction} from '@store/actions/getTeams';
import {Team} from '@models/common/team.interface';
import {APP_IMAGES} from '@assets/index';
import {styles} from './styles';
import {THEME} from '@styles/theme';

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AppRoutes.DASHBOARD
>;

export const Dashboard: FC<DashboardScreenProps> = ({navigation}) => {
  const isLoading = useSelector(isLoadingTeamsSelector);
  const teamsFromDb = useSelector(teamsSelector);

  const dispatch = useDispatch();

  const goToDetails = (id: number) => () =>
    navigation.navigate(AppRoutes.DETAILS, {teamID: id});

  const renderItem = ({item}: {item: Team}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={goToDetails(item.id)}>
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
    dispatch(getTeamsAction.request());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color={THEME.SECONDARY} />
      ) : (
        <FlatList
          data={teamsFromDb}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      )}
    </SafeAreaView>
  );
};

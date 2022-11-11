import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: undefined;
  Details: {teamID: number};
};

export type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

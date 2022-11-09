import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: {title: string} | undefined;
  Details: {title: string} | undefined;
};

export type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

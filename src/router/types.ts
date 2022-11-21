import {AppRoutes} from './index';

export type RootStackParamList = {
  [AppRoutes.DASHBOARD]: {};
  [AppRoutes.DETAILS]: {teamID: number};
};

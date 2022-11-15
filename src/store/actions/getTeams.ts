import {ActionType, createAsyncAction} from 'typesafe-actions';
import {ErrorResponse} from '@models/ErrorResponse';
import {Team} from '@models/common/Team';

export enum GetTeamsTypes {
  GetTeams = '[GetTeams] GetTeams',
  GetTeamsSuccess = '[GetTeams] GetTeamsSuccess',
  GetTeamsFailed = '[GetTeams] GetTeamsFailed',
}

export const getTeamsAction = createAsyncAction(
  GetTeamsTypes.GetTeams,
  GetTeamsTypes.GetTeamsSuccess,
  GetTeamsTypes.GetTeamsFailed,
)<void, Team[], ErrorResponse>();

export type GetTeamsUnion = ActionType<typeof getTeamsAction>;

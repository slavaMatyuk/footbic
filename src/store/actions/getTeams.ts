import {ActionType, createAsyncAction} from 'typesafe-actions';
import {Team} from '@models/Team';
import {ErrorResponse} from '@models/ErrorResponse';

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

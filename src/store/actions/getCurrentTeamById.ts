import {ActionType, createAsyncAction} from 'typesafe-actions';
import {CurrentTeam} from '@models/GetCurrentTeamResponse';
import {ErrorResponse} from '@models/ErrorResponse';

export enum GetCurrentTeamByIdTypes {
  GetCurrentTeamById = '[GetCurrentTeamById] GetCurrentTeamById',
  GetCurrentTeamByIdSuccess = '[GetCurrentTeamById] GetCurrentTeamByIdSuccess',
  GetCurrentTeamByIdFailed = '[GetCurrentTeamById] GetCurrentTeamByIdFailed',
}

export const getCurrentTeamByIdAction = createAsyncAction(
  GetCurrentTeamByIdTypes.GetCurrentTeamById,
  GetCurrentTeamByIdTypes.GetCurrentTeamByIdSuccess,
  GetCurrentTeamByIdTypes.GetCurrentTeamByIdFailed,
)<number, CurrentTeam, ErrorResponse>();

export type GetCurrentTeamByIdUnion = ActionType<
  typeof getCurrentTeamByIdAction
>;
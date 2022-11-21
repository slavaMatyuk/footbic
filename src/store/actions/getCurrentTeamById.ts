import {ActionType, createAsyncAction} from 'typesafe-actions';
import {CurrentTeamResponse} from '@models/getCurrentTeamResponse';
import {ErrorResponse} from '@models/errorResponse';

export enum GetCurrentTeamByIdTypes {
  GetCurrentTeamById = '[GetCurrentTeamById] GetCurrentTeamById',
  GetCurrentTeamByIdSuccess = '[GetCurrentTeamById] GetCurrentTeamByIdSuccess',
  GetCurrentTeamByIdFailed = '[GetCurrentTeamById] GetCurrentTeamByIdFailed',
}

export const getCurrentTeamByIdAction = createAsyncAction(
  GetCurrentTeamByIdTypes.GetCurrentTeamById,
  GetCurrentTeamByIdTypes.GetCurrentTeamByIdSuccess,
  GetCurrentTeamByIdTypes.GetCurrentTeamByIdFailed,
)<number, CurrentTeamResponse, ErrorResponse>();

export type GetCurrentTeamByIdUnion = ActionType<
  typeof getCurrentTeamByIdAction
>;

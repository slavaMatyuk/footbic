import {ActionType, createAsyncAction} from 'typesafe-actions';
import {Match} from '@models/common/match.interface';
import {ErrorResponse} from '@models/errorResponse';

export enum GetUpcomingMatchesTypes {
  GetUpcomingMatches = '[GetUpcomingMatches] GetUpcomingMatches',
  GetUpcomingMatchesSuccess = '[GetUpcomingMatches] GetUpcomingMatchesSuccess',
  GetUpcomingMatchesFailed = '[GetUpcomingMatches] GetUpcomingMatchesFailed',
}

export const getUpcomingMatchesAction = createAsyncAction(
  GetUpcomingMatchesTypes.GetUpcomingMatches,
  GetUpcomingMatchesTypes.GetUpcomingMatchesSuccess,
  GetUpcomingMatchesTypes.GetUpcomingMatchesFailed,
)<number, Match[], ErrorResponse>();

export type GetUpcomingMatchesUnion = ActionType<
  typeof getUpcomingMatchesAction
>;

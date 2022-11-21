import {createReducer} from 'typesafe-actions';
import {Match} from '@models/common/match.interface';
import {
  getUpcomingMatchesAction,
  GetUpcomingMatchesUnion,
} from '@store/actions/getUpcomingMatches';

export interface State {
  isLoadingMatches: boolean;
  matches: Match[];
  error: string;
}

const initialState: State = {
  isLoadingMatches: false,
  matches: [],
  error: '',
};

export const reducer = createReducer<State, GetUpcomingMatchesUnion>(
  initialState,
)
  .handleAction(getUpcomingMatchesAction.request, state => ({
    ...state,
    isLoadingMatches: true,
  }))
  .handleAction(getUpcomingMatchesAction.success, (state, action) => ({
    ...state,
    isLoadingMatches: false,
    matches: action.payload,
  }))
  .handleAction(getUpcomingMatchesAction.failure, (state, action) => ({
    ...state,
    isLoadingMatches: false,
    error: action.payload.message,
  }));

import {createReducer} from 'typesafe-actions';
import {
  getCurrentTeamByIdAction,
  GetCurrentTeamByIdUnion,
} from '@store/actions/getCurrentTeamById';
import {CurrentTeamResponse} from '@models/getCurrentTeamResponse';

export interface State {
  isLoadingTeam: boolean;
  currentTeam: CurrentTeamResponse | null;
  error: string;
}

const initialState: State = {
  isLoadingTeam: false,
  currentTeam: null,
  error: '',
};

export const reducer = createReducer<State, GetCurrentTeamByIdUnion>(
  initialState,
)
  .handleAction(getCurrentTeamByIdAction.request, state => ({
    ...state,
    isLoadingTeam: true,
  }))
  .handleAction(getCurrentTeamByIdAction.success, (state, action) => ({
    ...state,
    isLoadingTeam: false,
    currentTeam: action.payload,
  }))
  .handleAction(getCurrentTeamByIdAction.failure, (state, action) => ({
    ...state,
    isLoadingTeam: false,
    error: action.payload.message,
  }));

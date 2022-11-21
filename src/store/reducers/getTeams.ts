import {createReducer} from 'typesafe-actions';
import {Team} from '@models/common/team.interface';
import {getTeamsAction, GetTeamsUnion} from '@store/actions/getTeams';

export interface State {
  isLoading: boolean;
  data: Team[];
  error: string;
}

const initialState: State = {
  isLoading: false,
  data: [],
  error: '',
};

export const reducer = createReducer<State, GetTeamsUnion>(initialState)
  .handleAction(getTeamsAction.request, state => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(getTeamsAction.success, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.payload,
  }))
  .handleAction(getTeamsAction.failure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload.message,
  }));

import 'react-redux';
import {combineReducers} from '@reduxjs/toolkit';
import * as fromGetTeams from './getTeams';
import * as fromGetCurrentTeamById from './getCurrentTeamById';

export interface AppState {
  getTeams: fromGetTeams.State;
  getCurrentTeamById: fromGetCurrentTeamById.State;
}

export const rootReducer = combineReducers<AppState>({
  getTeams: fromGetTeams.reducer,
  getCurrentTeamById: fromGetCurrentTeamById.reducer,
});

import 'react-redux';
import {combineReducers} from '@reduxjs/toolkit';
import * as fromGetTeams from './getTeams';
import * as fromGetCurrentTeamById from './getCurrentTeamById';
import * as fromGetUpcomingMatches from './getUpcomingMatches';

export interface AppState {
  teams: fromGetTeams.State;
  currentTeamById: fromGetCurrentTeamById.State;
  upcomingMatches: fromGetUpcomingMatches.State;
}

export const rootReducer = combineReducers<AppState>({
  teams: fromGetTeams.reducer,
  currentTeamById: fromGetCurrentTeamById.reducer,
  upcomingMatches: fromGetUpcomingMatches.reducer,
});

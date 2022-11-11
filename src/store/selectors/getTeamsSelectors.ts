import {createSelector} from 'reselect';
import {AppState} from '@store/reducers';

const getTeamsStateSelector = (state: AppState) => state.getTeams;

export const isLoadingTeamsSelector = createSelector(
  getTeamsStateSelector,
  state => state.isLoading,
);

export const errorOnGetTeamsSelector = createSelector(
  getTeamsStateSelector,
  state => state.error,
);

export const teamsSelector = createSelector(
  getTeamsStateSelector,
  state => state.data,
);

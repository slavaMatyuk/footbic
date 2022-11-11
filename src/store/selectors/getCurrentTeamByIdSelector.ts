import {createSelector} from 'reselect';
import {AppState} from '@store/reducers';

const getCurrentTeamByIdStateSelector = (state: AppState) =>
  state.getCurrentTeamById;

export const isLoadingCurrentTeamSelector = createSelector(
  getCurrentTeamByIdStateSelector,
  state => state.isLoadingTeam,
);

export const errorOnGetCurrentTeamSelector = createSelector(
  getCurrentTeamByIdStateSelector,
  state => state.error,
);

export const currentTeamSelector = createSelector(
  getCurrentTeamByIdStateSelector,
  state => state.currentTeam,
);

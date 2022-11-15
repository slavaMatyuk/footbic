import {createSelector} from 'reselect';
import {AppState} from '@store/reducers';

const getUpcomingMatchesStateSelector = (state: AppState) =>
  state.getUpcomingMatches;

export const isLoadingMatchesSelector = createSelector(
  getUpcomingMatchesStateSelector,
  state => state.isLoadingMatches,
);

export const errorOnGetMatchesSelector = createSelector(
  getUpcomingMatchesStateSelector,
  state => state.error,
);

export const matchesSelector = createSelector(
  getUpcomingMatchesStateSelector,
  state => state.matches,
);

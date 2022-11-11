import {fork} from '@redux-saga/core/effects';
import {getTeamsSagaWatcher} from './getTeamsSaga';
import {getCurrentTeamByIdSagaWatcher} from './getCurrentTeamByIdSaga';

export function* rootSaga() {
  yield fork(getTeamsSagaWatcher);
  yield fork(getCurrentTeamByIdSagaWatcher);
}

import {getTeams} from '@services/api';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {Team} from '@models/common/team.interface';
import {ErrorResponse} from '@models/errorResponse';
import {getTeamsAction} from '@store/actions/getTeams';

export function* getTeamsSagaWorker() {
  try {
    const response: Team[] = yield call(getTeams);
    yield put(getTeamsAction.success(response));
  } catch (error) {
    yield put(getTeamsAction.failure(error as ErrorResponse));
  }
}

export function* getTeamsSagaWatcher() {
  yield takeLatest(getTeamsAction.request, getTeamsSagaWorker);
}

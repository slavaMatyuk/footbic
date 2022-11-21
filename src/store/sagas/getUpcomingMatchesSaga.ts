import {ActionType} from 'typesafe-actions';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {getUpcomingMatchesById} from '@services/api';
import {Match} from '@models/common/match.interface';
import {ErrorResponse} from '@models/errorResponse';
import {getUpcomingMatchesAction} from '@store/actions/getUpcomingMatches';

export function* getUpcomingMatchesSagaWorker({
  payload,
}: ActionType<typeof getUpcomingMatchesAction.request>) {
  try {
    const response: Match[] = yield call(getUpcomingMatchesById, payload);
    yield put(getUpcomingMatchesAction.success(response));
  } catch (error) {
    yield put(getUpcomingMatchesAction.failure(error as ErrorResponse));
  }
}

export function* getUpcomingMatchesSagaWatcher() {
  yield takeLatest(
    getUpcomingMatchesAction.request,
    getUpcomingMatchesSagaWorker,
  );
}

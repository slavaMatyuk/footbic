import {ActionType} from 'typesafe-actions';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {getCurrentTeamById} from '@services/api';
import {CurrentTeam} from '@models/GetCurrentTeamResponse';
import {ErrorResponse} from '@models/ErrorResponse';
import {getCurrentTeamByIdAction} from '@store/actions/getCurrentTeamById';

export function* getCurrentTeamByIdSagaWorker({
  payload,
}: ActionType<typeof getCurrentTeamByIdAction.request>) {
  try {
    const response: CurrentTeam = yield call(getCurrentTeamById, payload);
    yield put(getCurrentTeamByIdAction.success(response));
  } catch (error) {
    yield put(getCurrentTeamByIdAction.failure(error as ErrorResponse));
  }
}

export function* getCurrentTeamByIdSagaWatcher() {
  yield takeLatest(
    getCurrentTeamByIdAction.request,
    getCurrentTeamByIdSagaWorker,
  );
}

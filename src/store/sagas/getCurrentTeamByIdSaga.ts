import {ActionType} from 'typesafe-actions';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {getCurrentTeamById} from '@services/api';
import {CurrentTeamResponse} from '@models/GetCurrentTeamResponse';
import {ErrorResponse} from '@models/ErrorResponse';
import {getCurrentTeamByIdAction} from '@store/actions/getCurrentTeamById';

export function* getCurrentTeamByIdSagaWorker({
  payload,
}: ActionType<typeof getCurrentTeamByIdAction.request>) {
  try {
    const response: CurrentTeamResponse = yield call(
      getCurrentTeamById,
      payload,
    );
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

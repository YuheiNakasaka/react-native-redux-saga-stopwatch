import { put, call, take, fork, cancel } from 'redux-saga/effects';
import { START_TIMER, STOP_TIMER, INCREASE_TIMER } from '../constants/home';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* tick() {
  while (true) {
    yield call(delay, 1000);
    yield put({ type: INCREASE_TIMER });
  }
}

function* handleTimer() {
  while (yield take(START_TIMER)) {
    yield put({ type: START_TIMER });
    const timer = yield fork(tick);

    yield take(STOP_TIMER);
    yield put({ type: STOP_TIMER });
    yield cancel(timer);
  }
}

function* dataSaga() {
  yield handleTimer();
}

export default dataSaga;

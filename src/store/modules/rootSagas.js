// configuration saga application
import { all } from 'redux-saga/effects';
import characters from './characters/sagas';
import profiler from './profiler/sagas';
import episodes from './episodes/sagas';

export default function* rootSaga() {
  return yield all([characters, profiler, episodes]);
}

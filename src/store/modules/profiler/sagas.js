import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as requestProfiler from './profiler';
import * as types from '../../types';

function* getQuoteProfiler({ payload }) {
  try {
    const { data } = yield call(requestProfiler.getQuotesProfiler, payload);
    yield put({
      type: types.SET_QUOTE_PROFILER,
      payload: data,
    });
  } catch (error) {}
}

function* cleanQuoteProfiler() {
  try {
    yield put({
      type: types.SET_QUOTE_PROFILER,
      payload: [],
    });
  } catch (error) {}
}

export default all([
  takeLatest(types.GET_QUOTE_PROFILER, getQuoteProfiler),
  takeLatest(types.CLEAN_QUOTE_PROFILER, cleanQuoteProfiler),
]);

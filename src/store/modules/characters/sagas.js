import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as requestCharacters from './characters';
import * as types from '../../types';
import { toast } from 'react-toastify';

function* getAllCharacters() {
  try {
    const { data } = yield call(requestCharacters.getAllCharacters);
    yield put({
      type: types.SAVE_ALL_CHARACTERS,
      payload: data,
    });
  } catch (error) {
    toast.error('Não foi possível obter os personagens!');
  }
}

function* getMoreCharacters({ payload }) {
  try {
    const { offset } = payload;
    let request = yield call(requestCharacters.getMoreCharacters, 10, offset);
    if (request.data.length > 0) {
      yield put({
        type: types.LAST_PAGE_SEARCH,
        payload: offset,
      });
    } else {
      request = yield call(
        requestCharacters.getMoreCharacters,
        10,
        offset - 10
      );
      toast.error('Não foi possível obter os personagens!');
    }

    yield put({
      type: types.SAVE_ALL_CHARACTERS,
      payload: request.data,
    });
  } catch (error) {
    toast.error('Não foi possível obter os personagens!');
  }
}

function* getNameCharacters({ payload }) {
  try {
    const { data } = yield call(requestCharacters.getNameCharacters, payload);
    yield put({
      type: types.SAVE_ALL_CHARACTERS,
      payload: data,
    });
  } catch (error) {
    toast.error('Não foi possível obter o personagen!');
  }
}
export default all([
  takeLatest(types.GET_ALL_CHARACTERS, getAllCharacters),
  takeLatest(types.GET_MORE_CHARACTERS, getMoreCharacters),
  takeLatest(types.GET_NAME_CHARACTERS, getNameCharacters),
]);

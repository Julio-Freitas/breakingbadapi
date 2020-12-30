import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as actionEpisodes from './episodes';
import { toast } from 'react-toastify';
import * as types from '../../types';

function* getEpisodes() {
  try {
    const { data } = yield call(actionEpisodes.getEpisodes);
    yield put({
      type: types.SET_EPISODES,
      payload: data,
    });
  } catch (error) {
    toast.error('Não foi possível obter os episódios');
  }
}

export default all([takeLatest(types.GET_EPISODES, getEpisodes)]);

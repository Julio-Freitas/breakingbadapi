import * as types from '../../types';

export const getCharacters = () => ({ type: types.GET_ALL_CHARACTERS });

export const getMoreCharacters = (payload) => ({
  type: types.GET_MORE_CHARACTERS,
  payload,
});

export const getNameCharacters = (payload) => ({
  type: types.GET_NAME_CHARACTERS,
  payload,
});

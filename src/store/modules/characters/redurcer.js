import * as types from '../../types';

const INITAL_STATE = {
  characters: [],
  lastPageOffset: null,
};

export default function redurcers(state = INITAL_STATE, action) {
  switch (action.type) {
    case types.SAVE_ALL_CHARACTERS:
      console.log();
      return {
        ...state,
        characters: action.payload,
      };

    case types.LAST_PAGE_SEARCH:
      return {
        ...state,
        lastPageOffset: action.payload,
      };

    default:
      return state;
  }
}

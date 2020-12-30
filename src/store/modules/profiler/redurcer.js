import * as types from '../../types';

const INITAL_STATE = {
  quotes: [],
};

export default function redurcers(state = INITAL_STATE, action) {
  switch (action.type) {
    case types.SET_QUOTE_PROFILER:
      return {
        ...state,
        quotes: action.payload,
      };

    default:
      return state;
  }
}

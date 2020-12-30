import * as types from '../../types';
const INITAL_STATE = {
  list: [],
};

export default function redurcers(state = INITAL_STATE, action) {
  switch (action.type) {
    case types.SET_EPISODES:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}

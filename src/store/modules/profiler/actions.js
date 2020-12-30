import * as types from '../../types';

export const getQuotesProfiler = (payload) => ({
  type: types.GET_QUOTE_PROFILER,
  payload,
});

export const clearQuotes = () => ({ type: types.CLEAN_QUOTE_PROFILER });

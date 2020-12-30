import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (redurcers) => {
  const persistReducers = persistReducer(
    {
      key: 'CONSUMO_API_BREAKING_BAD',
      storage,
      whitelist: ['breakingbad'],
    },
    redurcers
  );

  return persistReducers;
};

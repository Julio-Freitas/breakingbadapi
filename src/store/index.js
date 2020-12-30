import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import persisteDate from './modules/persistedRedux';
import redurcers from './modules/rootRedurcers';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persisteDate(redurcers),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };

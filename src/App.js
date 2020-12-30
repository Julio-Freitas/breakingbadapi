import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';
import history from './services/history';
import Routes from './routes';
import NavBar from './components/navBar';

import GlobalStyles from './globalStyles/globalStyle';

function App() {
  const optionsArr = [
    {
      value: 'Home',
      path: '/',
      selected: false,
    },
    {
      value: 'Episódios',
      path: '/episodios',
      selected: false,
    },
  ];

  return (
    <Provider store={store}>
      <NavBar history={history} optionsNav={optionsArr} />
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}
export default App;

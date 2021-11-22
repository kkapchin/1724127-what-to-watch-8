import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { promo } from './mocks/promo';
import { similars } from './mocks/similars';
import { reducer } from './store/reducer';
import { getFavorites, getFilm, onSubmit } from './utils';

const isAuthorized = true;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={promo}
        getFavorites={getFavorites}
        similar={similars}
        isAuthorized={isAuthorized}
        onSubmit={onSubmit}
        getFilm={getFilm}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

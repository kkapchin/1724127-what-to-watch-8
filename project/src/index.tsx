import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { promo } from './mocks/promo';
import { similar } from './mocks/similar';
import { getFavorites, getFilm, onSubmit } from './utils';

const isAuthorized = true;

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={films}
      getFavorites={getFavorites}
      similar={similar}
      isAuthorized={isAuthorized}
      onSubmit={onSubmit}
      getFilm={getFilm}
    />
  </React.StrictMode>,
  document.getElementById('root'));

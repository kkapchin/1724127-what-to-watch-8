import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { films } from './mocks/films';
import { promo } from './mocks/promo';
import { similar } from './mocks/similar';
import { onSubmit } from './utils';

const isAuthorized = true;

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={films}
      favorites={favorites}
      similar={similar}
      isAuthorized={isAuthorized}
      onSubmit={onSubmit}
    />
  </React.StrictMode>,
  document.getElementById('root'));

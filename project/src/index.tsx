import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { promo } from './mocks/promo';

const isAuthorized = false;

ReactDOM.render(
  <React.StrictMode>
    <App promo={promo} isAuthorized={isAuthorized} />
  </React.StrictMode>,
  document.getElementById('root'));

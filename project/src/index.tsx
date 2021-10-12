import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { promo } from './mocks/promo';

ReactDOM.render(
  <React.StrictMode>
    <App promo={promo} />
  </React.StrictMode>,
  document.getElementById('root'));

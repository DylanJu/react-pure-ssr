import ReactDOM, { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

if (module.hot) {
  module.hot.accept();
}
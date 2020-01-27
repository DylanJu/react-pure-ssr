import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import GlobalStyle from './styles/GlobalStyle';
import App from './App';

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <BrowserRouter>
      <>
        <GlobalStyle />
        <App />
      </>
    </BrowserRouter>,
    rootElement,
  );
});

if (module.hot) {
  module.hot.accept();
}

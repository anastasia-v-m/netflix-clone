import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import AppProvider from './components/AppProvider';
import store from './store/store';

import './reset.scss';
import './common.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>,
  document.getElementById('root'),
);

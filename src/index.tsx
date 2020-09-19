import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './containers/Error-boundary/Error-boundary';
import  'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <ErrorBoundary >
          <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux'; 
import logger from 'redux-logger';
import rootReducer from './reducers'
import Router from './router';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {
  colours: ['#857f6e', '#575a54', '#000000']
};

// Create Redux state store (ReduxThunk middleware allows us to have asynchronous actions).
const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Tools needed to connect, create store, and share state */
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'

/* State management of actions and dispatch */
import reducerBreak from './store/reducer/ReducerBreak'
import reducerSession from './store/reducer/ReducerSession'

import App from './App';
import * as serviceWorker from './serviceWorker';

/* 2 state management system in place */
const rootReducer = combineReducers({
  reBreak:reducerBreak,
  reSession:reducerSession,
})

/* Created Store to hold state data */
const store = createStore(rootReducer);

/* Wrapped my app with our Provider helps connect state to app
and passed as props our store which holds my state */
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

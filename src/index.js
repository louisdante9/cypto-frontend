import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers';
import setAuthToken from './utils/SetAuthToken';
import {setCurrentUser} from './actions';
import './index.css';
import App from './App';
import dotenv from 'dotenv';
dotenv.config()

const middleware = applyMiddleware(thunk);
const configureStore = (state = {}) => createStore(
  rootReducer,
  state,
  compose(
    middleware,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const store = configureStore();
const {localStorage} = window;
const jwtToken = localStorage && localStorage.getItem('token');
const decodedToken = jwt.decode(jwtToken);
if (decodedToken) {
  const hasExpired = decodedToken.exp - (Date.now() / 1000) < 0;
  if (!hasExpired) {
    setAuthToken(jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(jwtToken)));
  } else {
    localStorage.removeItem('token');
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

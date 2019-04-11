import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../rootReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
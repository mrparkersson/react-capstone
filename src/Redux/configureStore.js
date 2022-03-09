import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import covidReducer from './covid';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;

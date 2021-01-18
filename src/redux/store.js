import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { userReducer } from './users';

const logger = createLogger();

const middlewares = [thunk, logger];

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };

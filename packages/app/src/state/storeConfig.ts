import { Middleware, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const configureStore = () => {
  const middlewares: Middleware[] = [thunk];

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

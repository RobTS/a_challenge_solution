import { Middleware, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import FlipperPlugin from 'redux-flipper';
import { rootReducer } from './reducers';

export const configureStore = () => {
  const middlewares: Middleware[] = [thunk];

  if (__DEV__) {
    middlewares.push(FlipperPlugin());
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

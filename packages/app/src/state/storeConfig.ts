import { Middleware, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import FlipperPlugin from 'redux-flipper';
import { rootReducer } from './reducers';

export const configureStore = () => {
  const middlewares: Middleware[] = [thunk];

  if (__DEV__) {
    // flipper plugin for easier development workflow
    middlewares.push(FlipperPlugin());
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

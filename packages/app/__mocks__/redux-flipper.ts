import { Middleware, MiddlewareAPI } from 'redux';

const Flipper: () => Middleware = () => (_store: MiddlewareAPI) => (
  next: (action: any) => void,
) => (action: any) => {
  next(action);
};

export default Flipper;

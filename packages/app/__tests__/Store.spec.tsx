import { configureStore } from '../src/state/storeConfig';
import { fetchDataSuccess } from '../src/state/actions';
import { fetchData } from '../src/state/api';
import { Thunks } from '../src/state/thunks';

jest.mock('../src/state/api');

describe('The store', () => {
  it('has the correct initial state correctly', () => {
    const store = configureStore();
    expect(store.getState().profiles.type).toEqual('initial');
    expect(store.getState().profiles.data).toBeUndefined();
  });

  it('has the correct state after receiving data', () => {
    const store = configureStore();
    store.dispatch(
      fetchDataSuccess([
        {
          id: '2',
          avatar: 'https://i.pravatar.cc/150?img=2',
          name: 'Esme Coleman',
        },
      ]),
    );
    expect(store.getState().profiles.data).toHaveLength(1);
  });

  it('executes the thunk correctly with mocked Api', (cb) => {
    const store = configureStore();
    const mockFetch = fetchData as jest.Mock;
    mockFetch.mockReturnValue(Promise.resolve([]));
    Thunks.fetchData()(store.dispatch);
    setTimeout(() => {
      expect(mockFetch).toHaveBeenCalled();
      expect(store.getState().profiles.type).toEqual('success');
      expect(store.getState().profiles.data).toHaveLength(0);
      cb();
    }, 50);
  });
});

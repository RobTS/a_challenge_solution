import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { ProfileList } from '../src/containers/ProfileList';
import { configureStore } from '../src/state/storeConfig';
import { fetchDataSuccess } from '../src/state/actions';

describe('The profile list', () => {
  it('renders correctly', () => {
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
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfileList />
        </Provider>,
      )
      .toJSON() as any;
    expect(tree.children).toHaveLength(1);
    expect(tree).toMatchSnapshot();
  });
});

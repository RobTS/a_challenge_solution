import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { ProfileListItem } from '../src/components/ProfileListItem';

describe('The profile item', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ProfileListItem
          even={true}
          name={'Peter Testman'}
          id={'2'}
          avatar={'https://i.pravatar.cc/150?img=2'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

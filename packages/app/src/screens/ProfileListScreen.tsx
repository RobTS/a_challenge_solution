import React, { useEffect } from 'react';
import { ProfileList } from '../containers/ProfileList';
import { useSelector } from 'react-redux';
import { useThunk } from '../state/hooks';
import { Thunks } from '../state/thunks';
import { GlobalState } from '../state/reducerTypes';
import { useNavigation } from '@react-navigation/native';

export const ProfileListScreen = () => {
  const navigation = useNavigation();
  const dispatchThunk = useThunk();
  const profileRequestState = useSelector(
    (state: GlobalState) => state.profiles.type,
  );

  useEffect(() => {
    navigation.setOptions({ title: 'Great People' });
  });

  useEffect(() => {
    if (profileRequestState !== 'initial') {
      return;
    }
    dispatchThunk(Thunks.fetchData());
  }, [dispatchThunk, profileRequestState]);

  return <ProfileList />;
};

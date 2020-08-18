import React, { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { GlobalState } from '../state/reducerTypes';
import { ProfileListItem } from '../components/ProfileListItem';

export const ProfileList: React.FC = () => {
  const profileRequest = useSelector((state: GlobalState) => state.profiles);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <ProfileListItem
        even={index % 2 === 0}
        id={item.id}
        avatar={item.avatar}
        name={item.name}
        key={item.id}
      />
    );
  }, []);

  return (
    <FlatList
      style={styles.listView}
      contentContainerStyle={styles.listContainer}
      data={profileRequest.type === 'success' ? profileRequest.data : []}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listView: { flex: 1 },
  listContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { GlobalState } from '../state/reducerTypes';
import { ProfileListItem } from '../components/ProfileListItem';

const ListHeader = () => {
  const profileRequestState = useSelector(
    (state: GlobalState) => state.profiles.type,
  );

  if (profileRequestState === 'success' || profileRequestState === 'initial') {
    return null;
  }

  return (
    <View style={styles.messageHeader}>
      {profileRequestState === 'error' ? (
        <Text style={styles.messageHeaderText}>
          No connection to the server. Have you started it and adapted the
          SERVER_URL?
        </Text>
      ) : null}
      {profileRequestState === 'loading' ? <Text>Loading content</Text> : null}
    </View>
  );
};

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
      ListHeaderComponent={<ListHeader />}
      data={profileRequest.type === 'success' ? profileRequest.data : []}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  messageHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffa500',
  },
  messageHeaderText: {
    textAlign: 'center',
  },
  listView: { flex: 1 },
  listContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

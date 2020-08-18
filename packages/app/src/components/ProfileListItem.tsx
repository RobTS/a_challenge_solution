import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from './Image';
import { Profile } from '../state/entities';

export const ProfileListItem: React.FC<Profile> = (props: Profile) => {
  return (
    <View style={styles.imageListItem}>
      <Image url={props.avatar} style={styles.image} />
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageListItem: {
    margin: 10,
  },
  image: { flex: 1 },
});

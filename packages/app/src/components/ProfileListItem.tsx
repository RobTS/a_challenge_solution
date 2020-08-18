import { Dimensions, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Image } from './Image';
import { Profile } from '../state/entities';

type Props = Profile & { even: boolean };

export const ProfileListItem: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.imageListItem}>
      <Image url={props.avatar} style={styles.image} />
      <Text
        numberOfLines={1}
        style={props.even ? styles.profileNameEven : styles.profileNameOdd}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageListItem: {
    alignSelf: 'stretch',
    position: 'relative',
  },
  profileNameEven: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
  },
  profileNameOdd: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
  },
  image: {
    backgroundColor: '#000000',
    flex: 1,
    height: (Dimensions.get('screen').width / 16) * 9,
    width: Dimensions.get('screen').width,
  },
});

import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from './Image';

type ImageProps = {
  url: string;
};

export const ImageListItem: React.FC<ImageProps> = (props: ImageProps) => {
  return (
    <View style={styles.imageListItem}>
      <Image url={props.url} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageListItem: {
    margin: 10,
  },
  image: { flex: 1 },
});

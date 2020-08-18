import FastImage, { ImageStyle } from 'react-native-fast-image';
import { StyleProp } from 'react-native';
import React from 'react';

type ImageProps = {
  url: string;
  style?: StyleProp<ImageStyle>;
};

export const Image: React.FC<ImageProps> = (props: ImageProps) => (
  <FastImage
    style={props.style}
    source={{
      uri: props.url,
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

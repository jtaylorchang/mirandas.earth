import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { TAttributedImage } from '@backend/blog';

const RectangleImage: React.FC<{ image: TAttributedImage }> = ({ image }) => {
  return (
    <View style={styles.container}>
      <img src={image.source} width="100%" height="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

export default RectangleImage;

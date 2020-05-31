import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { TImage } from '@backend/blog';

const RectangleImage: React.FC<{ image: TImage }> = ({ image }) => {
  return (
    <View style={styles.container}>
      <img src={image.url} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default RectangleImage;

import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import { Header } from '@components';

const { height } = Dimensions.get('window');

const AboutContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header label="About" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height
  }
});

export default AboutContent;

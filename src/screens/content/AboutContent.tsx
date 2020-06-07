import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Route, NavigationProp } from '@react-navigation/native';

import { Header } from '@components';

const { height } = Dimensions.get('window');

const AboutContent: React.FC<{ route: Route<'Post'>; navigation: NavigationProp<any, 'Post'> }> = ({
  route,
  navigation
}) => {
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

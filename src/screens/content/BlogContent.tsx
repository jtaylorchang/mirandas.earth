import React from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from 'react-navigation-hooks';
import moment from 'moment';

import { ParamType } from '@navigation/NavigationTypes';
import { theme } from '@constants';

const BlogContent: React.FC<{
  navigation: ParamType;
}> = ({ navigation }) => {
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  const scrollRef = React.useRef(undefined);

  const renderPost = (post) => <React.Fragment />;

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BlogContent;

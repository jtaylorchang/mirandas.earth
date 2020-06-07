import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, Route, NavigationProp } from '@react-navigation/native';

import { TRedux } from '@reducers';
import { TPost } from '@backend/blog';
import { theme } from '@constants';
import { Header, Post } from '@components';

const { height } = Dimensions.get('window');

const BlogPostContent: React.FC<{ route: Route<'Post'>; navigation: NavigationProp<any, 'Post'> }> = ({
  route,
  navigation
}) => {
  const postsDict = useSelector((state: TRedux) => state.blog.postsDict);

  return (
    <View style={styles.container}>
      <Header label="" />

      <View style={styles.content}>
        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scrollContentBottom}>
              <Post post={postsDict[route.params['_id']]} expanded={true} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height
  },
  content: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    height: '100%'
  },
  scrollContent: {
    flex: 1,
    alignItems: 'center'
  },
  scrollContentBottom: {
    marginBottom: 20
  }
});

export default BlogPostContent;

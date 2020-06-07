import React from 'react';
import { StyleSheet, Dimensions, View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Route, NavigationProp } from '@react-navigation/native';

import { TRedux } from '@reducers';
import { _blog } from '@reducers/actions';
import { TPost } from '@backend/blog';
import { theme } from '@constants';
import { Header, Post, PostSelector } from '@components';

const { height } = Dimensions.get('window');

const BlogContent: React.FC<{ route: Route<'Post'>; navigation: NavigationProp<any, 'Post'> }> = ({
  route,
  navigation
}) => {
  const posts = useSelector((state: TRedux) => state.blog.posts);

  const scrollRef = React.useRef(undefined);

  return (
    <View style={styles.container}>
      <Header label="Blog" />

      <View style={styles.splitContainer}>
        <View style={styles.splitContent}>
          <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              {posts.map((post: TPost) => (
                <Post key={post._id} post={post} />
              ))}
            </ScrollView>
          </View>
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
    marginHorizontal: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  splitContainer: {
    flex: 1
  },
  splitContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  featuredContent: {
    flex: 1,
    minWidth: 300,
    backgroundColor: `${theme.COLORS.PRIMARY_GREEN}16`
  },
  scrollContainer: {
    flex: 1,
    height: '100%'
  },
  scrollContent: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

export default BlogContent;

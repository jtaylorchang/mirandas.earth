import React from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from 'react-navigation-hooks';
import moment from 'moment';

import { ParamType } from '@navigation/NavigationTypes';
import { TRedux } from '@reducers';
import { _blog } from '@reducers/actions';
import { TPost } from '@backend/blog';
import { theme } from '@constants';
import { Post, PostSelector } from '@components';

const BlogContent: React.FC<{
  navigation: ParamType;
}> = ({ navigation }) => {
  const isFocused = useIsFocused();

  const posts = useSelector((state: TRedux) => state.blog.posts);
  const featuredPost = useSelector((state: TRedux) => state.blog.featuredPost);

  const dispatch = useDispatch();
  const dispatchGetPosts = React.useCallback(() => dispatch(_blog.getPosts()), [dispatch]);

  const scrollRef = React.useRef(undefined);

  React.useEffect(() => {
    if (isFocused) {
      dispatchGetPosts();
    }
  }, [dispatchGetPosts, isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.splitContainer}>
        <View style={styles.splitContent}>
          <View style={styles.featuredContent}>
            <Post post={featuredPost} featured={true} />
          </View>

          <View style={styles.scrollContent}>
            <ScrollView>
              {posts
                .filter((post: TPost) => featuredPost === null || post._id !== featuredPost._id)
                .map((post: TPost) => (
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
    flex: 1
  },
  content: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  splitContainer: {
    flex: 1,
    padding: 20
  },
  splitContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  featuredContent: {
    flex: 1,
    minWidth: 440,
    backgroundColor: `${theme.COLORS.PRIMARY_GREEN}16`
  },
  scrollContent: {
    flex: 1,
    height: '100%',
    minWidth: 440
  }
});

export default BlogContent;

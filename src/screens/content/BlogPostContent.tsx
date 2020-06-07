import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
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

  React.useEffect(() => {
    console.log(route.params);
    console.log(postsDict);
  }, [route, postsDict]);

  return (
    <View style={styles.container}>
      <Header label="" />

      <View style={styles.content}>
        <Post post={postsDict[route.params['_id']]} expanded={true} />
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BlogPostContent;

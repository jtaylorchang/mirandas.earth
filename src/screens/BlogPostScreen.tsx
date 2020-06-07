import React from 'react';
import { Route, NavigationProp } from '@react-navigation/native';

import Content from '@screens/content/BlogPostContent';

const BlogPostScreen: React.FC<{ route: Route<'Post'>; navigation: NavigationProp<any, 'Post'> }> = ({
  route,
  navigation
}) => {
  return <Content route={route} navigation={navigation} />;
};

export default BlogPostScreen;

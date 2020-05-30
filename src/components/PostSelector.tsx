import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TPost, TBodyElement } from '@backend/blog';
import { useSelector, useDispatch } from 'react-redux';

import { TRedux } from '@reducers';
import { _blog } from '@reducers/actions';
import { theme } from '@constants';
import Hoverable from '@components/Hoverable';

const PostSelector: React.FC<{
  post: TPost;
}> = ({ post }) => {
  const featuredPost = useSelector((state: TRedux) => state.blog.featuredPost);

  const dispatch = useDispatch();
  const dispatchSetFeatured = React.useCallback(() => dispatch(_blog.setFeatured(post)), [dispatch, post]);

  const hovered = React.useMemo(() => {
    return featuredPost !== null && post._id === featuredPost._id;
  }, [featuredPost, post._id]);

  const onHoverStart = React.useCallback(() => {
    dispatchSetFeatured();
  }, [dispatchSetFeatured]);

  return (
    <Hoverable onHoverStart={onHoverStart}>
      <View style={[styles.container, { opacity: hovered ? 1.0 : 0.4 }]}>
        <Text style={styles.category}>{post.category}</Text>

        <Text style={styles.title}>{post.title}</Text>
      </View>
    </Hoverable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  category: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: theme.COLORS.PRIMARY_GREEN,
    textTransform: 'uppercase'
  },
  title: {
    marginTop: 4,
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24
  }
});

export default PostSelector;

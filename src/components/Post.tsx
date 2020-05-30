import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TPost, TBodyElement } from '@backend/blog';

import { theme } from '@constants';
import BodyElement from '@components/BodyElement';
import Link from '@components/Link';

const Post: React.FC<{
  post: TPost;
  expanded?: boolean;
}> = ({ post, expanded = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{post.date}</Text>

      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.description}>{post.description}</Text>

      {expanded ? (
        <View style={styles.body}>
          {post.body.map((element: TBodyElement, index: number) => (
            <BodyElement key={`${element.type}-${index}`} element={element} />
          ))}
        </View>
      ) : (
        <Link label="Read Story" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    maxWidth: 800
  },
  date: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: theme.COLORS.DARK_GRAY
  },
  title: {
    marginTop: 8,
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 34
  },
  description: {
    marginVertical: 16,
    fontFamily: 'OpenSans',
    fontSize: 16,
    lineHeight: 28,
    color: theme.COLORS.DARK_GRAY
  },
  readStory: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16
  },
  body: {}
});

export default Post;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TPost, TBodyElement } from '@backend/blog';

import { theme } from '@constants';
import BodyElement from '@components/BodyElement';
import Link from '@components/Link';
import RectangleImage from '@components/RectangleImage';

const Post: React.FC<{
  post: TPost;
  featured?: boolean;
  expanded?: boolean;
}> = ({ post, featured = false, expanded = false }) => {
  if (post === null) return <React.Fragment />;

  return (
    <View
      style={[
        styles.container,
        featured && {
          backgroundColor: `${theme.COLORS.PRIMARY_GREEN}16`
        }
      ]}
    >
      <View style={styles.topText}>
        <Text style={styles.category}>{post.category}</Text>
        <Text style={styles.date}>{post.date}</Text>
      </View>

      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.description}>{post.description}</Text>

      {expanded ? (
        <View style={styles.body}>
          {post.body.map((element: TBodyElement, index: number) => (
            <BodyElement key={`${element.type}-${index}`} element={element} />
          ))}
        </View>
      ) : (
        <React.Fragment>
          <Link label="Read Story" />
          {post.image !== null && (
            <View style={styles.imageWrapper}>
              <RectangleImage image={post.image} />
            </View>
          )}
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: 800,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: `${theme.COLORS.SUPER_LIGHT_BLUE_GRAY}16`
  },
  topText: {
    flexDirection: 'row'
  },
  category: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: theme.COLORS.PRIMARY_GREEN,
    textTransform: 'uppercase'
  },
  date: {
    marginLeft: 16,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: theme.COLORS.GRAY,
    textTransform: 'uppercase'
  },
  title: {
    marginTop: 4,
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
  body: {},
  imageWrapper: {
    marginTop: 24
  }
});

export default Post;

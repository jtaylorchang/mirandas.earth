import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TPost, TBodyElement } from '@backend/blog';
import { useLinkTo } from '@react-navigation/native';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { theme } from '@constants';
import BodyElement from '@components/BodyElement';
import Link from '@components/Link';
import RectangleImage from '@components/RectangleImage';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Text style={styles.boldText}>{text}</Text>,
    [MARKS.ITALIC]: (text) => <Text style={styles.italicText}>{text}</Text>,
    [MARKS.UNDERLINE]: (text) => <Text style={styles.underlineText}>{text}</Text>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text style={styles.paragraph}>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <Text style={styles.heading1}>{children}</Text>,
    [BLOCKS.HEADING_2]: (node, children) => <Text style={styles.heading2}>{children}</Text>,
    [BLOCKS.HEADING_3]: (node, children) => <Text style={styles.heading3}>{children}</Text>,
    [BLOCKS.HEADING_4]: (node, children) => <Text style={styles.heading4}>{children}</Text>,
    [BLOCKS.HEADING_5]: (node, children) => <Text style={styles.heading5}>{children}</Text>,
    [BLOCKS.HEADING_6]: (node, children) => <Text style={styles.heading6}>{children}</Text>,
    [BLOCKS.QUOTE]: (node, children) => <Text style={styles.quote}>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <View style={styles.paddedItem}>
        <RectangleImage image={node.data.target.fields.file} />
      </View>
    )
  }
};

const Post: React.FC<{
  post: TPost;
  expanded?: boolean;
}> = ({ post, expanded = false }) => {
  const linkPath = React.useMemo(() => {
    if (post !== null && post !== undefined) {
      return `/post/${post._id}`;
    }

    return '/';
  }, [post]);

  if (post === null || post === undefined) return <React.Fragment />;

  return (
    <View
      style={[
        styles.container,
        post.featured && {
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
        <View style={styles.body}>{documentToReactComponents(post.body, options)}</View>
      ) : (
        <React.Fragment>
          <Link label="Read Story" path={linkPath} />
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
  imageWrapper: {
    marginTop: 24
  },
  body: {},
  paragraph: {
    fontFamily: 'OpenSans',
    fontSize: 16
  },
  heading1: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 28
  },
  heading2: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26
  },
  heading3: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24
  },
  heading4: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22
  },
  heading5: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20
  },
  heading6: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18
  },
  quote: {
    marginVertical: 16,
    padding: 12,
    borderLeftColor: theme.COLORS.GRAY,
    borderLeftWidth: 4,
    backgroundColor: theme.COLORS.SUPER_LIGHT_BLUE_GRAY
  },
  boldText: {
    fontFamily: 'OpenSans-Bold'
  },
  italicText: {
    fontStyle: 'italic'
  },
  underlineText: {
    textDecorationLine: 'underline'
  },
  paddedItem: {
    marginVertical: 8
  }
});

export default Post;

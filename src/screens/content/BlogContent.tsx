import React from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from 'react-navigation-hooks';
import moment from 'moment';

import { ParamType } from '@navigation/NavigationTypes';
import { theme } from '@constants';
import { Post } from '@components';

const BlogContent: React.FC<{
  navigation: ParamType;
}> = ({ navigation }) => {
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  const scrollRef = React.useRef(undefined);

  return (
    <View style={styles.container}>
      <View style={styles.splitContainer}>
        <View style={styles.optionsContent}>
          <Post
            post={{
              date: 'June 17, 2020',
              title: "Welcome to Miranda's Earth",
              description:
                "My Junior year of college, I switched majors and decided I had to help save our planet. This is my story and why it's important.",
              body: [
                { type: 'paragraph', paragraph: 'Text goes here' },
                { type: 'image', image: { attribution: 'todo', source: '' } },
                { type: 'paragraph', paragraph: 'Text goes here' }
              ],
              image: null
            }}
          />
          <Post
            post={{
              date: 'June 17, 2020',
              title: 'The Perks of Being Vegetarian',
              description:
                "My Junior year of college, I switched majors and decided I had to help save our planet. This is my story and why it's important.",
              body: [
                { type: 'paragraph', paragraph: 'Text goes here' },
                { type: 'image', image: { attribution: 'todo', source: '' } },
                { type: 'paragraph', paragraph: 'Text goes here' }
              ],
              image: null
            }}
          />
        </View>

        <View style={styles.selectedContent}></View>
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
  featureStory: {
    backgroundColor: `${theme.COLORS.PRIMARY}60`
  },
  splitContainer: {
    flexDirection: 'row'
  },
  optionsContent: {},
  selectedContent: {}
});

export default BlogContent;

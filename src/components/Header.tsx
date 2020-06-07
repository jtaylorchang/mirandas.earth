import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

import { theme } from '@constants';
import { HEADER_HEIGHT } from '@services/utils';
import Link from '@components/Link';

const Header: React.FC<{ label: string }> = ({ label }) => {
  const linkTo = useLinkTo();

  const onPressBlog = React.useCallback(() => linkTo('/'), [linkTo]);
  const onPressAbout = React.useCallback(() => linkTo('/about'), [linkTo]);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1.0} onPress={onPressBlog}>
        <Text style={styles.headerText}>
          Miranda's <Text style={styles.earthText}>Earth</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <View style={styles.link}>
          <Link
            label="Blog"
            color={label === 'Blog' ? theme.COLORS.PRIMARY_GREEN : theme.COLORS.BLACK}
            onPress={onPressBlog}
          />
        </View>

        <View style={styles.link}>
          <Link
            label="About"
            color={label === 'About' ? theme.COLORS.PRIMARY_GREEN : theme.COLORS.BLACK}
            onPress={onPressAbout}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    marginLeft: 16,
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    lineHeight: 24
  },
  earthText: {
    color: theme.COLORS.PRIMARY_GREEN
  },
  links: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  link: {
    marginHorizontal: 8
  }
});

export default Header;

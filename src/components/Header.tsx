import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link as RNLink } from '@react-navigation/native';

import { theme } from '@constants';
import { HEADER_HEIGHT } from '@services/utils';
import Link from '@components/Link';

const Header: React.FC<{ label: string }> = ({ label }) => {
  return (
    <View style={styles.container}>
      <RNLink to="/">
        <Text style={styles.headerText}>
          Miranda's <Text style={styles.earthText}>Earth</Text>
        </Text>
      </RNLink>

      <View style={styles.links}>
        <View style={styles.link}>
          <Link label="Home" color={label === 'Home' ? theme.COLORS.PRIMARY_GREEN : theme.COLORS.BLACK} path={'/'} />
        </View>

        <View style={styles.link}>
          <Link
            label="LinkedIn"
            color={theme.COLORS.BLACK}
            path="https://www.linkedin.com/in/miranda-johnson-56a403149/"
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

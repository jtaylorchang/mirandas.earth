import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

import { theme } from '@constants';
import { HEADER_HEIGHT } from '@services/utils';
import Link from '@components/Link';

const Header: React.FC<{ label: string }> = ({ label }) => {
  const linkTo = useLinkTo();

  const onPressHome = React.useCallback(() => linkTo('/'), [linkTo]);
  const onPressLinkedIn = React.useCallback(() => {
    //linkTo('/about')
    window.open('https://www.linkedin.com/in/miranda-johnson-56a403149/', '_blank');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1.0} onPress={onPressHome}>
        <Text style={styles.headerText}>
          Miranda's <Text style={styles.earthText}>Earth</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <View style={styles.link}>
          <Link
            label="Home"
            color={label === 'Home' ? theme.COLORS.PRIMARY_GREEN : theme.COLORS.BLACK}
            onPress={onPressHome}
          />
        </View>

        <View style={styles.link}>
          <Link label="LinkedIn" color={theme.COLORS.BLACK} onPress={onPressLinkedIn} />
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

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { TRedux } from '@reducers';
import { _nav } from '@reducers/actions';
import { navigate } from '@navigation/NavigationService';
import { theme } from '@constants';
import Link from '@components/Link';

const Header: React.FC = () => {
  const selectedPageLabel = useSelector((state: TRedux) => state.nav.selectedPageLabel);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Miranda's <Text style={styles.earthText}>Earth</Text>
      </Text>

      <View style={styles.links}>
        <View style={styles.link}>
          <Link label="Blog" color={selectedPageLabel === 'Blog' ? theme.COLORS.PRIMARY_GREEN : theme.COLORS.BLACK} />
        </View>

        <View style={styles.link}>
          <Link label="About" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

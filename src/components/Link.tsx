import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Link as RNLink } from '@react-navigation/native';

import { theme } from '@constants';

const Link: React.FC<{
  label: string;
  color?: string;
  fontSize?: number;
  disabled?: boolean;
  path: string;
}> = ({ label, color = theme.COLORS.BLACK, fontSize = 16, disabled = false, path = '/' }) => {
  const onPressTouchable = React.useCallback(() => {
    window.open(path, '_blank');
  }, [path]);

  const renderChildren = () => (
    <React.Fragment>
      <Text style={[styles.label, { color, fontSize }]}>{label}</Text>
      <View style={[styles.underline, { borderBottomColor: color }]} />
    </React.Fragment>
  );

  return (
    <View style={styles.content}>
      {path.startsWith('/') ? (
        <RNLink style={{ opacity: disabled ? 0.4 : 1 }} to={path}>
          <View>{renderChildren()}</View>
        </RNLink>
      ) : (
        <RNLink to={path} action={{ type: '' }}>
          <TouchableOpacity
            style={{ opacity: disabled ? 0.4 : 1 }}
            activeOpacity={0.6}
            disabled={disabled}
            onPress={onPressTouchable}
          >
            {renderChildren()}
          </TouchableOpacity>
        </RNLink>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignSelf: 'flex-start'
  },
  label: {
    fontFamily: 'OpenSans-Bold'
  },
  underline: {
    marginTop: 2,
    borderBottomWidth: 2
  }
});

export default Link;

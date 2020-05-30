import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { theme } from '@constants';

const Link: React.FC<{
  label: string;
  color?: string;
  fontSize?: number;
  disabled?: boolean;
  onPress?(): void;
}> = ({ label, color = theme.COLORS.BLACK, fontSize = 16, disabled = false, onPress = () => {} }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={{ opacity: disabled ? 0.4 : 1 }}
        activeOpacity={0.6}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={[styles.label, { color, fontSize }]}>{label}</Text>
        <View style={[styles.underline, { borderBottomColor: color }]} />
      </TouchableOpacity>
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

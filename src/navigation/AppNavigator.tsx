import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '@constants';
import { AboutScreen, BlogScreen } from '@screens';
import { navigationRef } from '@navigation/NavigationService';

const AboutStack = createStackNavigator();
const BlogStack = createStackNavigator();

const AboutStackNavigator = () => {
  return (
    <AboutStack.Navigator screenOptions={{ headerShown: false }}>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};

const BlogStackNavigator = () => {
  return (
    <BlogStack.Navigator screenOptions={{ headerShown: false }}>
      <BlogStack.Screen name="Blog" component={BlogScreen} />
    </BlogStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const NavigatorTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.COLORS.WHITE
  }
};

const ConsumeTabBar = () => <React.Fragment />;

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={NavigatorTheme}>
      <Tab.Navigator tabBar={ConsumeTabBar} screenOptions={{ tabBarVisible: false }}>
        <Tab.Screen name="Blog" component={BlogStackNavigator} />
        <Tab.Screen name="About" component={AboutStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

import React from 'react';
import { NavigationContainer, DefaultTheme, Theme, LinkingOptions } from '@react-navigation/native';
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

const Linking: LinkingOptions = {
  prefixes: ['https://localhost:19006', 'https://mirandas.earth'],
  config: {
    Blog: {
      screens: {
        Blog: ''
      }
    },
    About: {
      screens: {
        About: 'about'
      }
    }
  }
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={NavigatorTheme} linking={Linking}>
      <Tab.Navigator tabBar={ConsumeTabBar} screenOptions={{ tabBarVisible: false }}>
        <Tab.Screen name="Blog" component={BlogStackNavigator} />
        <Tab.Screen name="About" component={AboutStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

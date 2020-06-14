import React from 'react';
import { NavigationContainer, DefaultTheme, Theme, LinkingOptions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '@constants';
import { AboutScreen, BlogScreen, BlogPostScreen } from '@screens';
import { navigationRef } from '@navigation/NavigationService';

// Create stacks
const AboutStack = createStackNavigator();
const BlogStack = createStackNavigator();
const PostStack = createStackNavigator();

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
      <BlogStack.Screen name="Home" component={BlogScreen} />
    </BlogStack.Navigator>
  );
};

const PostStackNavigator = () => {
  return (
    <PostStack.Navigator screenOptions={{ headerShown: false }}>
      <BlogStack.Screen name="Post" component={BlogPostScreen} />
    </PostStack.Navigator>
  );
};

// Create Tab navigator for caching
const Tab = createBottomTabNavigator();

const NavigatorTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.COLORS.WHITE
  }
};

// Hides the tab bar flash, coordinated with hiding tab bar visibility
const ConsumeTabBar = () => <React.Fragment />;

// Handles the URL linking
const Linking: LinkingOptions = {
  prefixes: ['https://localhost:19006', 'https://mirandas.earth'],
  config: {
    // Home: {
    //   screens: {
    //     Home: '',
    //     Post: 'post/:_id'
    //   }
    // }
    // About: {
    //   screens: {
    //     About: 'about'
    //   }
    // }
    Home: {
      screens: {
        Home: ''
      }
    },
    Post: {
      screens: {
        Post: 'post/:_id'
      }
    }
  }
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={NavigatorTheme} linking={Linking}>
      <Tab.Navigator tabBar={ConsumeTabBar} screenOptions={{ tabBarVisible: false }}>
        <Tab.Screen name="Home" component={BlogStackNavigator} />
        <Tab.Screen name="Post" component={PostStackNavigator} />
        {/* <Tab.Screen name="About" component={AboutStackNavigator} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

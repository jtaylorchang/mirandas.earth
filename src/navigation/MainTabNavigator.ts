import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { AboutScreen, BlogScreen } from '@screens';

const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
        headerStyle: {
          height: 0
        }
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false
    })
  }
);

const BlogStack = createStackNavigator(
  {
    Blog: {
      screen: BlogScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
        headerStyle: {
          height: 0
        }
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false
    })
  }
);

export default createBottomTabNavigator({
  BlogStack,
  AboutStack
});

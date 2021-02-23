import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Home, Setting} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import HomeStacks from './HomeStacks';
import SettingStacks from './SettingStacks';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          // activeBackgroundColor: '#8BC540',
          // inactiveBackgroundColor: '#349746',
          // activeTintColor: COLORS.secondary,
          // inactiveTintColor: COLORS.tabColorInactive,
          tabStyle: {
            paddingTop: 3,
          },
          style: {
            height: 58,
          },
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStacks}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({size, color}) => (
              <Icon name="home-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingStacks}
          options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="settings-sharp" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;

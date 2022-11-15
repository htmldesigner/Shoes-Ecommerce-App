import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DetailScreen, HomeScreen, SettingsScreen} from '../screens';
import HomeIcon from '../assets/icons/HomeIcon';
import UserIcon from '../assets/icons/UserIcon';
import CatalogIcon from '../assets/icons/CatalogIcon';
const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <CatalogIcon color={color} size={size} />
          ),
          tabBarLabel: 'Settings',
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
          tabBarLabel: 'Details',
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Setting} from '../screens';
const SettingStacks = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerTitle: 'Settings Screen'}}
      />
    </Stack.Navigator>
  );
};

export default SettingStacks;

const styles = StyleSheet.create({});

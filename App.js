import React from 'react';
import {StyleSheet} from 'react-native';
import Tabs from './navigation/Tabs';
import {SettingsScreen, ProfilerScreen} from './screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profiler" component={ProfilerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

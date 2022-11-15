import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {HomeScreen} from './screens';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS, SIZES, FONTS, icons} from './constants';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {...FONTS.navTitle},
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={() => Alert.alert('menu')}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => Alert.alert('search')}>
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';

const Settings = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Profiler')}>
        <Text style={{...FONTS.h1}}>SettingsScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

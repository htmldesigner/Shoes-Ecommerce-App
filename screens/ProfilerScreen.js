import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';

const ProfilerScreen = ({navigation}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{...FONTS.h1}}>ProfilerScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilerScreen;

const styles = StyleSheet.create({});

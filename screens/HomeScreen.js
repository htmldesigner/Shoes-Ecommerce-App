import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';
const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{...FONTS.h1}}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

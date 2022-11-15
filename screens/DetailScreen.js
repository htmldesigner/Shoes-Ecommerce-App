import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../constants';

const DetailScreen = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{...FONTS.h1}}>DetailScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

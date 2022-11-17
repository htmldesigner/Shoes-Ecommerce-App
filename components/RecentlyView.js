import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {recently} from '../screens/data';
import {FONTS, SIZES, COLORS, images} from '../constants';

const RecentlyView = ({setSelectedItem, setShowAddedToBagModal}) => {
  function renderRecentlyView(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => {
          setSelectedItem(item);
          setShowAddedToBagModal(true);
        }}
      >
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: 130,
              height: 100,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}
        >
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.name}</Text>
          <Text style={{...FONTS.h3}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'row',
          marginTop: SIZES.padding,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white,
        },
        styles.recentContainerShadow,
      ]}
    >
      <View style={{width: 70, marginLeft: SIZES.base}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={images.recentlyViewedLabel}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingBottom: SIZES.padding,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={recently}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderRecentlyView(item, index)}
        />
      </View>
    </View>
  );
};

export default RecentlyView;

const styles = StyleSheet.create({
  recentContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.65,

    elevation: 8,
  },
});

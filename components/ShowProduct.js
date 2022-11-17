import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {FONTS, SIZES, COLORS, images} from '../constants';

const ShowProduct = ({selectedItem, setShowAddedToBagModal}) => {
  const [selectedSize, setSelectedSize] = useState('');

  function renderShoeSizes() {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.77}
          key={index}
          onPress={() => {
            setSelectedSize(item);
          }}
          style={{
            width: 35,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              selectedItem.sizes[index] === selectedSize ? COLORS.white : null,
            marginHorizontal: 5,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color:
                selectedItem.sizes[index] === selectedSize
                  ? COLORS.black
                  : COLORS.white,
              ...FONTS.body4,
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        width: '85%',
        backgroundColor: selectedItem.bgColor,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -SIZES.padding * 2,
        }}
      >
        <Image
          resizeMode="contain"
          source={selectedItem.img}
          style={{
            width: '90%',
            height: 170,
            transform: [{rotate: '-15deg'}],
          }}
        />
      </View>
      <Text
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          color: COLORS.white,
          ...FONTS.body2,
        }}
      >
        {selectedItem.name}
      </Text>
      <Text
        style={{
          marginTop: SIZES.base / 2,
          marginHorizontal: SIZES.padding,
          color: COLORS.white,
          ...FONTS.body3,
        }}
      >
        {selectedItem.type}
      </Text>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          color: COLORS.white,
          ...FONTS.h1,
        }}
      >
        {selectedItem.price}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
        }}
      >
        <View>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            Selected Size
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: SIZES.radius,
          }}
        >
          {renderShoeSizes()}
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setSelectedSize('');
          setShowAddedToBagModal(false);
        }}
        style={{
          width: '100%',
          height: 70,
          marginTop: SIZES.base,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Text style={{color: COLORS.white, ...FONTS.largeTitleBold}}>
          Add to bag
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowProduct;

const styles = StyleSheet.create({});

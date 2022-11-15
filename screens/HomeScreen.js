import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {FONTS, SIZES, COLORS, images} from '../constants';
import {Svg, Polygon} from 'react-native-svg';
const Home = () => {
  const [trending, setTrending] = useState([
    {
      id: 0,
      name: 'Nike Air Zoom Pegasus 36',
      img: images.nikePegasus36,
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Black,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: 'Nike Air Zoom Kobe 1 Proto',
      img: images.nikeZoomKobe1Proto,
      bgColor: '#7052A0',
      type: 'BASKETBALL',
      price: '$199',
      sizes: [6, 7, 8, 9],
    },
  ]);

  function renderTrendingShoes(item, index) {
    let trandingStyle = {};

    if (index === 0) trandingStyle = {marginLeft: SIZES.padding};

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          height: 240,
          width: 180,
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...trandingStyle,
        }}>
        <Text style={{color: COLORS.gray, ...FONTS.h5}}>{item.type}</Text>

        <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: SIZES.base,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
              backgroundColor: item.bgColor,
            },
            styles.trendingShadow,
          ]}>
          <View style={{height: '35%', justifyContent: 'space-between'}}>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              {item.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>{item.price}</Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 27,
            right: 0,
            width: '95%',
            height: '100%',
          }}>
          <Svg height="100%" width="100%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>

        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: 'absolute',
            height: 80,
            width: '98%',
            top: 50,
            right: 0,
            transform: [{rotate: '-15deg'}],
          }}></Image>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}>
        TRENDING
      </Text>

      <View style={{height: 260, marginTop: SIZES.radius}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          renderItem={({item, index}) => renderTrendingShoes(item, index)}
          keyExtractor={item => item.id.toString()}></FlatList>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Modal,
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

  const [recentlyViewed, setRecentlyViewed] = React.useState([
    {
      id: 0,
      name: 'Nike Metcon 4',
      img: images.nikeMetcon4,
      bgColor: '#414045',
      type: 'TRAINING',
      price: '$119',
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: 'Nike Metcon 6',
      img: images.nikeMetcon6,
      bgColor: '#4EABA6',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Purple,
      bgColor: '#2B4660',
      type: 'TRAINING',
      price: '$124',
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: 'Nike Metcon 3',
      img: images.nikeMetcon3,
      bgColor: '#A69285',
      type: 'TRAINING',
      price: '$99',
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: 'Nike Metcon Free',
      img: images.nikeMetconFree,
      bgColor: '#A02E41',
      type: 'TRAINING',
      price: '$108',
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]);

  const [showAddedToBagModal, setShowAddedToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  function renderTrendingShoes(item, index) {
    let trandingStyle = {};

    if (index === 0) trandingStyle = {marginLeft: SIZES.padding};

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          setShowAddedToBagModal(true);
        }}
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
          }}
        />
      </TouchableOpacity>
    );
  }

  function renderRecentlyView(item, index) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => {
          setSelectedItem(item);
          setShowAddedToBagModal(true);
        }}>
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
          }}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.name}</Text>
          <Text style={{...FONTS.h3}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

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
          }}>
          <Text
            style={{
              color:
                selectedItem.sizes[index] === selectedSize
                  ? COLORS.black
                  : COLORS.white,
              ...FONTS.body4,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
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
        ]}>
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
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => renderRecentlyView(item, index)}
          />
        </View>
      </View>

      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAddedToBagModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View // Blur container here
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',

              backgroundColor: '#fff',
              opacity: 0.9,
            }}>
            <TouchableOpacity
              style={styles.absolute}
              onPress={() => {
                console.log('sd');
                setSelectedItem(null);
                setSelectedSize('');
                setShowAddedToBagModal(false);
              }}></TouchableOpacity>
            {/* Content */}
            <View
              style={{
                justifyContent: 'center',
                width: '85%',
                backgroundColor: selectedItem.bgColor,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -SIZES.padding * 2,
                }}>
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
                }}>
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base / 2,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                {selectedItem.type}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}>
                {selectedItem.price}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                }}>
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
                  }}>
                  {renderShoeSizes()}
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setSelectedItem(null);
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
                }}>
                <Text style={{color: COLORS.white, ...FONTS.largeTitleBold}}>
                  Add to bag
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

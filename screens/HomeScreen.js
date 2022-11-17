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
import RecentlyView from '../components/RecentlyView';
import TrendingShoes from '../components/TrendingShoes';
import ModalWindow from '../components/ModalWindow';
import ShowProduct from '../components/ShowProduct';

const Home = () => {
  const [showAddedToBagModal, setShowAddedToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}
      >
        TRENDING
      </Text>

      <TrendingShoes
        setSelectedItem={setSelectedItem}
        setShowAddedToBagModal={setShowAddedToBagModal}
      ></TrendingShoes>

      <RecentlyView
        setSelectedItem={setSelectedItem}
        setShowAddedToBagModal={setShowAddedToBagModal}
      ></RecentlyView>

      {selectedItem && (
        <ModalWindow
          showModal={showAddedToBagModal}
          closeModel={setShowAddedToBagModal}
        >
          <ShowProduct
            setShowAddedToBagModal={setShowAddedToBagModal}
            selectedItem={selectedItem}
          />
        </ModalWindow>
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
});

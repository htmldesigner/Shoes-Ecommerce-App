import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';

const ModalWindow = ({showModal, closeModel, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View // Blur container here
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: '#fff',
          opacity: 0.9,
        }}
      >
        <TouchableOpacity
          style={styles.absolute}
          onPress={() => {
            closeModel(false);
          }}
        ></TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
};

export default ModalWindow;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

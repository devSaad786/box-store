import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { colors } from '../utilities/colors';

interface Props {
  placeholder?: string;
  onPlaceSelected: (data: any, details: any) => void;
  inputWidth?: number | string;
  inputHeight?: number;
  borderRadius?: number;
  apiKey: string;
  showLocationIcon?: boolean;
  onLocationPress?: () => void;
  placeholderTextColor?: string;
  modalTitle?: string;
}

const CustomGooglePlacesInput: React.FC<Props> = ({
  placeholder = 'Search location',
  onPlaceSelected,
  inputWidth = '100%',
  inputHeight = 50,
  borderRadius = 30,
  apiKey,
  showLocationIcon = true,
  onLocationPress,
  placeholderTextColor = '#888',
  modalTitle = 'Select Location',
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const placesRef = useRef<GooglePlacesAutocomplete>(null);

  const handlePlaceSelected = (data: any, details: any) => {
    onPlaceSelected(data, details);
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
    setTimeout(() => placesRef.current?.focus(), 300);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View
          style={[
            styles.container,
            {
              width: inputWidth,
              height: inputHeight,
              borderRadius,
            },
          ]}
        >
          <Text style={[styles.placeholderText, { color: placeholderTextColor }]}>
            {placeholder}
          </Text>

          {showLocationIcon && (
            <TouchableOpacity
              onPress={onLocationPress}
              style={styles.iconContainer}
              activeOpacity={0.9}
            >
              <FontAwesome6 name="location-crosshairs" size={22} color={colors.red} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <FontAwesome6 name="xmark" size={24} color={colors.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
              ref={placesRef}
              placeholder={placeholder}
              onPress={handlePlaceSelected}
              query={{
                key: apiKey,
                language: 'en',
              }}
              fetchDetails={true}
              enablePoweredByContainer={false}
              debounce={300}
              styles={{
                textInput: {
                  height: inputHeight,
                  backgroundColor: colors.gray,
                  color: colors.black,
                  fontSize: 16,
                  borderRadius: borderRadius,
                  paddingLeft: 40,
                  paddingRight: 15,
                },
                textInputContainer: {
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                },
                listView: {
                  position: 'absolute',
                  top: inputHeight + 100,
                  backgroundColor: colors.black,
                  borderRadius: 10,
                  maxHeight: 300,
                  zIndex: 2000,
                  elevation: 5,
                  width: '100%',
                },
                row: {
                  backgroundColor: colors.white,
                  paddingVertical: 12,
                  paddingHorizontal: 15,
                },
                description: {
                  color: colors.black,
                },
              }}
              textInputProps={{
                placeholderTextColor,
                autoFocus: true,
                returnKeyType: 'search',
              }}
              renderLeftButton={() => (
                <View style={styles.searchIcon}>
                  <FontAwesome6 name="magnifying-glass" size={18} color={placeholderTextColor} />
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  placeholderText: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  searchContainer: {
    padding: 10,
    zIndex: 1000,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 10,
  },
});

export default CustomGooglePlacesInput;

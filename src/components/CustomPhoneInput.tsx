import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CountryPicker } from 'react-native-country-codes-picker';

import { width, height } from '../utilities';
import { colors } from '../utilities/colors';
import { fontFamily } from '../assets/fonts';
import { fontSizes } from '../utilities/fontSizes';

interface CustomPhoneInputProps {
  placeholder: string;
  inputWidth: number;
  inputHeight: number;
  value: string;
  onChangeText: (text: string) => void;
  borderRadius: number;
  borderColor: string;
  borderWidth: number;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  placeholder,
  inputWidth,
  inputHeight,
  value,
  onChangeText,
  borderRadius,
  borderColor,
  borderWidth,
}) => {
  const [countryCode, setCountryCode] = useState('+1');
  const [flagUri, setFlagUri] = useState('https://flagcdn.com/w40/us.png');
  const [showModal, setShowModal] = useState(false);

  const handleCountrySelect = (item: { dial_code: string; code: string }) => {
    setCountryCode(item.dial_code);
    setFlagUri(`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`);
    setShowModal(false);
  };

  const circleSize = inputHeight * 0.6;

  return (
    <View style={[styles.container, { width: width * inputWidth }]}>
      {/* Left Box - Country Code */}
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={[
          styles.leftBox,
          {
            height: inputHeight,
            borderRadius,
            borderColor,
            borderWidth,
          },
        ]}
        activeOpacity={0.7}
      >
        <View style={[styles.flagWrapper, { width: circleSize, height: circleSize, borderRadius: circleSize / 2 }]}>
          <Image source={{ uri: flagUri }} style={styles.flagImage} />
        </View>
        <Text style={styles.codeText}>{countryCode}</Text>
        <Ionicons name="chevron-down" size={width * 0.04} color={colors.red} />
      </TouchableOpacity>

      {/* Right Box - Phone Input */}
      <View
        style={[
          styles.rightBox,
          {
            height: inputHeight,
            borderRadius,
            borderColor,
            borderWidth,
          },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.black}
          keyboardType="numeric"
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      {/* Country Picker Modal */}
      <SafeAreaView>
        <CountryPicker
          show={showModal}
          pickerButtonOnPress={handleCountrySelect}
          style={{
            modal: {
              height: height * 0.7,
              backgroundColor: colors.white,
            },
          }}
          lang=""
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    backgroundColor: colors.gray,
    width: '34%',
    justifyContent: 'space-between',
  },
  rightBox: {
    backgroundColor: colors.gray,
    paddingHorizontal: width * 0.04,
    flex: 1,
    marginLeft: width * 0.03,
    justifyContent: 'center',
  },
  flagWrapper: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight: 6,
  },
  flagImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  codeText: {
    fontFamily: fontFamily.OpenSansMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
    marginRight: 4,
  },
  textInput: {
    flex: 1,
    color: colors.black,
    fontFamily: fontFamily.OpenSansRegular,
    fontSize: fontSizes.sm,
  },
});

export default CustomPhoneInput;

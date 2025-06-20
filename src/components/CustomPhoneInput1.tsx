import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CountryPicker } from 'react-native-country-codes-picker';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { width, height } from '../utilities';
import { colors } from '../utilities/colors';
import { fontFamily } from '../assets/fonts';
import { fontSizes } from '../utilities/fontSizes';

interface Props {
  placeholder: string;
  inputWidth: number;
  inputHeight: number;
  value: string;
  onChangeText: (text: string) => void;
  borderRadius: number;
}

const CustomPhoneInput1: React.FC<Props> = ({
  placeholder,
  inputWidth,
  inputHeight,
  value,
  onChangeText,
  borderRadius,
}) => {
  const [countryCode, setCountryCode] = useState('+1');
  const [countryISO, setCountryISO] = useState('US');
  const [flagUri, setFlagUri] = useState('https://flagcdn.com/w40/us.png');
  const [showModal, setShowModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleCountrySelect = (item: { dial_code: string; code: string }) => {
    setCountryCode(item.dial_code);
    setCountryISO(item.code);
    setFlagUri(`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`);
    setShowModal(false);
  };

  useEffect(() => {
    const fullNumber = `${countryCode}${value}`;
    const phoneNumber = parsePhoneNumberFromString(fullNumber, countryISO);
    setIsVerified(phoneNumber?.isValid() ?? false);
  }, [value, countryCode]);

  return (
    <>
      <View
        style={[
          styles.wrapper,
          {
            width: width * inputWidth,
            height: inputHeight,
            borderRadius,
          },
        ]}
      >
        {/* Country Picker */}
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.countrySection}
          activeOpacity={0.7}
        >
          <Image source={{ uri: flagUri }} style={styles.flagImage} />
          <Text style={styles.codeText}>{countryCode}</Text>
          <Ionicons name="chevron-down" size={width * 0.04} color={colors.red} />
          <View style={styles.separator} />
        </TouchableOpacity>

        {/* Vertical Red Line */}
        <View style={styles.verticalLine} />

        {/* Phone Input */}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          keyboardType="phone-pad"
          style={[styles.textInput, isVerified && { paddingRight: width * 0.2 }]} // Avoid overlap
          value={value}
          onChangeText={onChangeText}
        />

        {/* Verified Label with Checkmark */}
        {isVerified && (
          <View style={styles.verifiedWrapper}>
            <Ionicons name="checkmark-circle" size={width * 0.05} color="red" />
            <Text style={styles.verifiedLabel}>Verified</Text>
          </View>
        )}
      </View>

      {/* Country Modal */}
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
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.03,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    opacity: 0.98,
    position: 'relative',
    borderBottomWidth: 1,  // Add border to show the line under the input
    borderBottomColor: colors.gray,  // You can change the color of the line
  },
  countrySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  flagImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6,
  },
  codeText: {
    fontFamily: fontFamily.OpenSansMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
    marginRight: 4,
  },
  separator: {
    height: '60%',
    width: 2,
    backgroundColor: colors.red,
    marginLeft: 6,
  },
  verticalLine: {
    width: 1,
    height: '60%',
    backgroundColor: colors.red,
    // marginLeft: 10,
    marginRight: 10,  // Ensure there's space between the vertical line and the input field
  },
  verifiedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',  // To make it stick to the right
    right: 10,  // Position to the right
    top: '50%',
    transform: [{ translateY: -12 }],  // Adjust vertical alignment
  },
  verifiedLabel: {
    fontFamily: fontFamily.OpenSansSemiBold,
    fontSize: fontSizes.sm,
    color: 'red',
    marginLeft: 5,
  },
  textInput: {
    flex: 1,
    fontFamily: fontFamily.OpenSansRegular,
    fontSize: fontSizes.sm2,
    color: colors.black,
    paddingLeft: 10,
  },
});

export default CustomPhoneInput1
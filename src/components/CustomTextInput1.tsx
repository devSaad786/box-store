import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  Platform,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../utilities/colors';

interface CustomTextInputProps {
  placeholder?: string;
  inputWidth: number | string;
  inputHeight: number | string;
  isPassword?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: boolean;
  borderRadius?: number;
  onChangeText?: (text: string) => void;
  value?: string;
  isDisable?: boolean;
  backgroundColor?: string;
  textColor?: string;
  placeholderTextColor?: string;
  showLeftIcon?: boolean;
  customLeftIcon?: React.ReactNode;
  showRightChevron?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

const CustomTextInput1: React.FC<CustomTextInputProps> = ({
  placeholder,
  inputWidth,
  inputHeight,
  isPassword = false,
  keyboardType = 'default',
  multiline = false,
  borderRadius = 30,
  onChangeText,
  value,
  isDisable = false,
  backgroundColor = colors.gray,
  textColor = colors.black,
  placeholderTextColor = 'rgba(0,0,0,0.5)',
  showLeftIcon = false,
  customLeftIcon,
  showRightChevron = false,
  rightIcon,
  onRightIconPress,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = () => {
    if (keyboardType === 'email-address' && value && validateEmail(value)) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const renderLeftIcon = () => {
    if (!showLeftIcon) return null;
    return customLeftIcon ? (
      customLeftIcon
    ) : (
      <MaterialCommunityIcons
        name="email"
        size={24}
        color={colors.red}
        style={{ marginRight: 8 }}
      />
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          height: typeof inputHeight === 'string' ? parseInt(inputHeight) : inputHeight,
          width: typeof inputWidth === 'string' ? parseInt(inputWidth) : inputWidth,
          borderRadius,
          backgroundColor,
          ...shadowStyle,
        },
      ]}
    >
      {showLeftIcon && <View style={styles.leftIconContainer}>{renderLeftIcon()}</View>}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        style={[
          styles.input,
          {
            color: textColor,
            textAlignVertical: multiline ? 'top' : 'center',
          },
        ]}
        secureTextEntry={isPassword ? showPassword : false}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        editable={!isDisable}
        onBlur={handleBlur}
      />

      {isVerified && (
        <View style={styles.verifiedContainer}>
          <MaterialIcons name="verified" size={18} color={colors.red} />
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
      )}

      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(prev => !prev)}
          style={styles.eyeContainer}
        >
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={20}
            color={colors.gray}
          />
        </TouchableOpacity>
      )}

      {showRightChevron && (
        <TouchableOpacity
          onPress={() => console.log('Chevron pressed')}
          style={styles.chevronTouchable}
        >
          <MaterialCommunityIcons
            name="chevron-down"
            size={35}
            color={colors.red}
          />
        </TouchableOpacity>
      )}

      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.rightIconTouchable}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput1;

const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.19,
    shadowRadius: 8,
  },
  android: {
    elevation: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    textAlignVertical: 'center',
    width: '100%',
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  eyeContainer: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    padding: 5,
  },
  rightIconTouchable: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  verifiedText: {
    marginLeft: 4,
    color: colors.red,
    fontSize: 14,
    fontWeight: '500',
  },
});

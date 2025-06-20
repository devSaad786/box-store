import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../utilities/colors";
import { fontSizes } from "../utilities/fontSizes";
import { fontFamily } from "../assets/fonts";
import images from "../assets/images";

const SearchInput1 = ({
  value,
  onChangeText,
  placeholder = "Search...",
  style,
  iconColor = colors.red,
  inputStyle,
  inputWidth = "92%",
  inputHeight = 50,
  divider = false,
  image, // ✅ custom image
  onImagePress, // ✅ optional touch event
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: inputWidth, height: inputHeight },
        style,
      ]}
    >
      <Feather name="search" size={20} color={iconColor} style={styles.icon} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        style={[styles.input, inputStyle]}
      />

      {divider && <View style={styles.divider} />}

      {onImagePress ? (
        <TouchableOpacity onPress={onImagePress}>
          <Image source={image} style={styles.settingsIcon} />
        </TouchableOpacity>
      ) : (
        <Image source={image} style={styles.settingsIcon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 40,
    borderWidth:2,
   borderColor:colors.gray,
    shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
    paddingHorizontal: 12,
    alignSelf: "center",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  divider: {
    height: "69%",
    width: 1,
    backgroundColor: colors.black,
    marginHorizontal: 10,
  },
  settingsIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default SearchInput1;

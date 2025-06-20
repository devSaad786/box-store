import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import React, { FC } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { fontFamily } from "../assets/fonts";
import { genericRatio } from "../helper/helper";
import { colors } from "../utilities/colors";
import { fontSizes } from "../utilities/fontSizes";

interface BackHeaderProps {
  title: string; // e.g. "Welcome"
  onBackPress?: () => void;
}

const BackHeader2: FC<BackHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      {/* LEFT SIDE */}
      <TouchableOpacity onPress={onBackPress} style={styles.iconWrapper}>
        <AntDesign name="arrowleft" size={27} color={colors.red} />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
  );
};

export default BackHeader2;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: genericRatio(Platform.OS === "ios" ? 10 : 35),
    paddingHorizontal: genericRatio(20),
  },
  iconWrapper: {
    paddingRight: 10,
  },
  title: {
    fontFamily: fontFamily.OpenSansBold,
    fontWeight: "700",
    fontSize: fontSizes.lg,
    color: colors.black,
  },
});

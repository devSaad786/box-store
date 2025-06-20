import {
    StyleSheet,
    Platform,
  } from "react-native";
 import { width,isAndroid,height } from "../utilities";
 import { colors } from "../utilities/colors";
 import { fontFamily } from "../assets/fonts";
 import { fontSizes } from "../utilities/fontSizes";
  import { genericRatio } from "../helper/helper";
  
  export const GlobalStyles = StyleSheet.create({
    // Layout
    container: {
      flex: 1,
      marginHorizontal: genericRatio(20),
    },
    containerInner: {
      flex: 1,
    },
    bg: {
      flex: 1,
      height: height,
      width: width,
    },
    secMain: {
      width: width,
      height: isAndroid ? height * 0.68 : height * 0.62,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
    },
    centerAll: {
      justifyContent: "center",
      alignItems: "center",
    },
    rowDirection: {
      flexDirection: "row",
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    justifyCenter: {
      justifyContent: "center",
    },
    alignCenter: {
      alignItems: "center",
    },
  
    // Inputs
    TextInputMain: {
      backgroundColor: colors.black,
      borderRadius: 7,
      alignItems: "center",
      paddingHorizontal: 20,
      flexDirection: "row",
      width: "100%",
    },
    TextInput: {
      width: "100%",
      height: "100%",
      color: colors.black,
      fontFamily: fontFamily.OpenSansMedium,
      fontSize: fontSizes.sm,
    },
    textInputShadow: {
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 5,
    },
    selectInput: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
    },
    searchInput: {
      width: "80%",
      borderWidth: 1,
      borderRadius: 30,
      flexDirection: "row",
      alignItems: "center",
      height: height * 0.06,
      paddingHorizontal: width * 0.03,
      gap: width * 0.02,
      borderColor: colors.gray,
      backgroundColor: colors.white,
    },
    searchInputMain: {
      color: colors.black,
      width: "85%",
      alignItems: "center",
    },
  
    // Icons
    passwordRightIcon: { width: 20 },
    leftIcon: { width: 18, resizeMode: "contain" },
    rightIcon: { width: 18, resizeMode: "contain" },
    eye: { width: 20, resizeMode: "contain" },
    icon: { width: 25, height: 25, resizeMode: "contain" },
  
    // Text
    selectText: {
      fontFamily: fontFamily.OpenSansMedium,
      fontWeight: "400",
      color: colors.black,
      fontSize: fontSizes.sm,
    },
    boldRoboto: {
      fontFamily: fontFamily.OpenSansBold,
      fontWeight: "800",
    },
    heading1: {
      fontSize: fontSizes.xl,
      fontFamily: fontFamily.OpenSansBold,
      fontWeight: "700",
      color: colors.black,
    },
    paragraph: {
      fontSize: fontSizes.sm,
      fontFamily: fontFamily.OpenSansMedium,
      color: colors.black,
      lineHeight: genericRatio(22),
    },
  
    // Buttons
    buttonPrimary: {
    //   backgroundColor: colors.primary,
      borderRadius: 10,
      paddingVertical: genericRatio(12),
      paddingHorizontal: genericRatio(25),
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: colors.white,
      fontSize: fontSizes.md,
      fontFamily: fontFamily.OpenSansBold,
      fontWeight: "600",
    },
  });
  
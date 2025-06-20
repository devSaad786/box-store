import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image,
  } from "react-native";
  import React, { FC } from "react";
  import { fontFamily } from "../assets/fonts";
  import { genericRatio } from "../helper/helper";
  import { colors } from "../utilities/colors";
  import images from "../assets/images";
  import { fontSizes } from "../utilities/fontSizes";
  
  interface BackHeaderProps {
    title: string;
    isBack?: boolean;
    onBackPress?: () => void;
    isNotification?: boolean;
    isjohn?: boolean;
    ismenu?: boolean;
    isShopping?: boolean;
    isNonstop?: boolean;
    iscall?: boolean;
    isback?: boolean;
    ispen?: boolean;
    isSearch?: boolean;
    isChat?: boolean;
    onJohnPress?: () => void;
    onNotificationPress?: () => void;
    onmenuPress?: () => void;
    onShoppingPress?: () => void;
    onNonstopPress?: () => void;
    oncallPress?: () => void;
    onbackPress?: () => void;
    onpenPress?: () => void;
    onChatPress?: () => void;
    onSearchPress?: () => void;
  }
  
  const BackHeader1: FC<BackHeaderProps> = ({
    title,
    isBack = false,
    onBackPress,
    isNotification = false,
    isjohn = false,
    ismenu = false,
    isShopping = false,
    isNonstop = false,
    iscall = false,
    isback = false,
    ispen = false,
    isSearch = false,
    isChat = false,
    onJohnPress,
    onmenuPress,
    onShoppingPress,
    onNotificationPress,
    onNonstopPress,
    oncallPress,
    onpenPress,
    onbackPress,
    onChatPress,
    onSearchPress,
  }) => {
    return (
      <View style={styles.container}>
        {/* LEFT SIDE */}
        <View style={styles.leftContainer}>
        {isjohn && (
            <TouchableOpacity onPress={onJohnPress} style={styles.iconButton}>
              <Image source={images.john} style={styles.icon4} />
            </TouchableOpacity>
          )}
          {ismenu && (
            <TouchableOpacity onPress={onmenuPress} style={styles.iconButton}>
              <Image source={images.menu} style={styles.icon} />
            </TouchableOpacity>
          )}
          {isNonstop && (
            <TouchableOpacity onPress={onNonstopPress} style={styles.iconButton}>
              <Image source={images.Nonstop} style={styles.iconSmall} />
            </TouchableOpacity>
          )}
        </View>
  
        {/* TITLE */}
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
  
        {/* RIGHT SIDE */}
        <View style={styles.rightContainer}>
          {isSearch && (
            <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
              <Image source={images.search} style={styles.icon} />
            </TouchableOpacity>
          )}
          {isChat && (
            <TouchableOpacity onPress={onChatPress} style={styles.iconButton}>
              <Image source={images.chat} style={styles.icon} />
            </TouchableOpacity>
          )}
          {isNotification && (
            <TouchableOpacity
              onPress={onNotificationPress}
              style={styles.iconButton}
            >
              <Image source={images.Notification} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  
  export default BackHeader1;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: genericRatio(Platform.OS === "ios" ? 10 : 35),
      paddingHorizontal: genericRatio(16),
      height: 40,
    },
    leftContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: 60,
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      width: 79,
    },
    title: {
      fontFamily: fontFamily.OpenSansBold,
      fontWeight: "700",
      fontSize: fontSizes.lg,
      color: colors.black,
      textAlign: "center",
    },
    iconButton: {
      marginLeft: 8,
    },
    icon: {
      width: 26,
      height: 26,
      resizeMode: "contain",
    },
    iconSmall: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    icon4: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
  });
  
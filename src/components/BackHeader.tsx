import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from "react-native";
import React, { FC } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
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
  ismenu?:boolean;
  isShopping?:boolean;
  isNonstop?:boolean;
  iscall?:boolean;
  isback?:boolean;
  ispen?:boolean;
  isnumber?:boolean;
  isnumber1?:boolean;
  onJohnPress?: () => void;
  onNotificationPress?: () => void;
  onmenuPress?: () => void;
  onShoppingPress?: () => void;
  onNonstopPress?: () => void;
  oncallPress?: () => void;
  onbackPress?: () => void;
  onpenPress?: () => void;
}

const BackHeader: FC<BackHeaderProps> = ({
  title,
  isBack = false,
  onBackPress,
  isNotification = false,
  isjohn = false,
  ismenu = false,
  isShopping=false,
  isNonstop=false,
  iscall=false,
  isback=false,
  ispen=false,
  isnumber=false,
  isnumber1=false,
  onJohnPress,
  onmenuPress,
  onShoppingPress,
  onNotificationPress,
  onNonstopPress,
  oncallPress,
  onpenPress,
  onbackPress,
}) => {
  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    }
  };

  return (
    <View style={styles.container}>
      {/* LEFT SIDE */}
      <View style={styles.side}>
        {isBack && (
          <TouchableOpacity onPress={handleBack} style={styles.iconWrapper}>
            <AntDesign name="arrowleft" size={27} color={colors.red} />
          </TouchableOpacity>
        )}
         {isback && (
          <TouchableOpacity onPress={handleBack} style={styles.iconWrapper}>
            <Image source={images.back1} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        )}
        {isjohn && (
          <TouchableOpacity onPress={onJohnPress}>
            <Image source={images.john} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        )}
        {ismenu && (
          <TouchableOpacity onPress={onmenuPress}>
            <Image source={images.menu} style={styles.image2} resizeMode="contain" />
          </TouchableOpacity>
        )}
        {isNonstop && (
          <TouchableOpacity onPress={onNonstopPress}>
            <Image source={images.Nonstop} style={styles.image2} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>

      {/* CENTER TITLE */}
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.side}>
        {isNotification && (
          <TouchableOpacity onPress={onNotificationPress}>
            <Image source={images.Notification} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
        )}
        {isShopping && (
          <TouchableOpacity onPress={onShoppingPress}>
            <Image source={images.shopping} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
        )}
         {iscall && (
          <TouchableOpacity onPress={oncallPress}>
            <Image source={images.call} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
        )}
         {ispen && (
          <TouchableOpacity onPress={onpenPress}>
            <Image source={images.pen} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
        )}
         {isnumber && (
          <Text style={styles.text2}>1/2</Text>

          )}
          {isnumber1 && (
          <Text style={styles.text2}>2/2</Text>
          )}
      </View>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: genericRatio(Platform.OS === "ios" ? 10 : 35),
    paddingHorizontal: genericRatio(20),
  },
  side: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    marginRight: 10,
  },
  title: {
    fontFamily: fontFamily.OpenSansBold,
    fontWeight: "700",
    fontSize:fontSizes. lg,
    textAlign: "center",
    color: colors.black,
  },
  image: {
    width: 50,
    height: 40,
    borderRadius: 20,
  },
  image1: {
    width: 30,
    height: 30,
    marginLeft:67
  },
  image2:{
    width: 30,
    height: 30,
  },
  text2: {
    color: colors.black,
    fontSize: fontSizes.md,
    marginLeft: 70,
  
  }
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";
import images from "../../assets/images";
import BackHeader from "../../components/BackHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const ShippingAddress = () => {
   const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate("EditAddress1")
  };

  const handleAddNewAddress = () => {
    console.log("Add New Address pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="Shipping Address" isShopping={true}  onBackPress={() => navigation.goBack()}
        onShoppingPress={() => navigation.navigate("MyCart")} />

      <TouchableOpacity onPress={handlePress} style={styles.rowContainer}>
        <View style={styles.outerCircle}>
          <Image source={images.circle} style={styles.image1} />
          <View style={styles.innerCircle} />
        </View>
        <Text style={styles.text1}>Address 01</Text>
        <Ionicons name="pencil-outline" size={30} color={colors.red} />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>Contact Person</Text>
          <Text style={styles.text2}>John Smith</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Phone Number</Text>
          <Text style={styles.text2}>+1 234 567890</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Address</Text>
          <Text style={styles.text2}>698 Cantebury Drive</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>City</Text>
          <Text style={styles.text2}>New York</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>State</Text>
          <Text style={styles.text2}>NY</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Postal Code</Text>
          <Text style={styles.text2}>10011</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Country</Text>
          <Text style={styles.text2}>United States</Text>
        </View>
      </View>

      {/* Add New Address Button */}
      <TouchableOpacity style={styles.addAddressBtn} onPress={handleAddNewAddress}>
        <View style={styles.plusCircle}>
          <Ionicons name="add" size={25} color={colors.white} />
        </View>
        <Text style={styles.addAddressText}>Add New Address</Text>
      </TouchableOpacity>
      <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}
        >
          <CustomButton
            text="Save"
            fontSize={fontSizes.lg2}
            btnHeight={height * 0.07}
            btnWidth={width * 0.89}
            textColor={colors.white}
              color={colors.red}
            borderRadius={50}
            onPress={() => navigation.navigate("Profile")}
          />
        </LinearGradient>
    </SafeAreaView>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -15,
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  outerCircle: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    width: width * 0.06,
    height: height * 0.1,
    position: "relative",
  },
  image1: {
    width: width * 0.06,
    height: height * 0.1,
    resizeMode: "contain",
    position: "absolute",
  },
  innerCircle: {
    width: width * 0.03,
    height: width * 0.03,
    backgroundColor: colors.white,
    borderRadius: (width * 0.03) / 2,
    position: "absolute",
    zIndex: 2,
  },
  text1: {
    flex: 1,
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansMedium,
    color: colors.red,
    fontWeight: "800",
  },
  card: {
    width: width * 0.88,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: -15,
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  halfLine: {
    height: 1,
    width: "90%",
    backgroundColor: colors.gray,
    alignSelf: "center",
    marginVertical: height * 0.01,
  },
  text: {
    flex: 1,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansMedium,
    fontWeight: "400",
  },
  text2: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansMedium,
    fontWeight: "400",
  },
  addAddressBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 30,
    alignSelf: "flex-end",
  },
  plusCircle: {
    width: 28,
    height: 28,
    borderRadius: 5,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  addAddressText: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.red,
    textDecorationLine:'underline'
  },
  gradientMain: {
    alignSelf: "center",
    marginTop: 140,
    borderRadius: 50,
  },
});

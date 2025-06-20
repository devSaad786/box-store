import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader isBack={true} title="Checkout" onBackPress={() => navigation.goBack()} />

      <Text style={styles.header}>Order Details</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>Product Category 001</Text>
          <Text style={styles.text1}>2x</Text>
          <Text style={styles.text2}>$150.00</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Product Category 002</Text>
          <Text style={styles.text1}>2x</Text>
          <Text style={styles.text2}>$120.00</Text>
        </View>
      </View>

      <Text style={styles.header}>Price Summary</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text2}>$270.00</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Delivery Charges</Text>
          <Text style={styles.text2}>$20.00</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Tax</Text>
          <Text style={styles.text2}>$40.00</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal (incl. VAT)</Text>
          <Text style={styles.text2}>$2940.00</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.header1}>Shipping Address</Text>
        <TouchableOpacity onPress={() => navigation.navigate("EditAddress")}>
          <Ionicons name="pencil-outline" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>Contact Person</Text>
          <Text style={styles.text2}>$270.00</Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.addressRow}>
          <Text style={styles.text}>Address</Text>
          <Text style={styles.text3}>
            698 Cartebury Drive, New York, 10011, NY, United States
          </Text>
        </View>
        <View style={styles.halfLine} />
        <View style={styles.row}>
          <Text style={styles.text}>Contact Number</Text>
          <Text style={styles.text4}>+1 234 5678 90</Text>
        </View>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Proceed Payment"
          fontSize={fontSizes.lg2}
          btnHeight={height * 0.07}
          btnWidth={width * 0.89}
          textColor={colors.white}
          color={colors.red}
          borderRadius={50}
          onPress={() => navigation.navigate("SelectPayment")}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: 20,
  },
  header: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.blue,
    marginTop: 20,
    marginHorizontal: 20,
    fontWeight: "800",
  },
  card: {
    width: width * 0.9,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
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
  },
  text: {
    flex: 2,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  text1: {
    flex: 1,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    textAlign: "center",
  },
  text2: {
    flex: 1,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.black,
    textAlign: "right",
  },
  text3: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    marginTop: 4,
    lineHeight: 20,
    width: width * 0.52,
    left: width * 0.01,
    textAlign: "right",
  },
  addressRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  header1: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.blue,
    fontWeight: "800",
  },
  gradientMain: {
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 50,
  },
  text4: {
    flex: 1,
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.black,
    textAlign: "right",
  },
});

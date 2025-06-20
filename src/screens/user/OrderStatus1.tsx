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
import OrderTimeline1 from "../../components/OrderTimeline1";
import { useNavigation } from "@react-navigation/native";
const OrderStatus1 = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="Order Status" isShopping={true} onBackPress={() => navigation.goBack()}
  onShoppingPress={() => navigation.navigate("MyCart")}/>


      <View style={styles.contentWrapper}>
        <View style={styles.card}>
          <View style={styles.infoBlock}>
            <View style={styles.rowSpaceBetween}>
              <Text style={styles.productName}>Product Name 001...</Text>
              <View style={styles.processRow}>
                <Image source={images.van} style={styles.processImage} />
                <Text style={styles.processText}>In Process</Text>
              </View>
            </View>

            <Text style={styles.orderText}>Order# 236589</Text>

            <View style={styles.rowSpaceBetween}>
              <Text style={styles.priceText}>$294.00</Text>
              <Text style={styles.dateText}>July 11, 2023</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
  style={styles.detailsButton}
  onPress={() => navigation.navigate("OrderDetails")}
>
          <Text style={styles.detailsText}>View Order Details</Text>
        </TouchableOpacity>

        <OrderTimeline1 />
      </View>
    </SafeAreaView>
  );
};

export default OrderStatus1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: colors.white,
    width: width * 0.87,
    borderRadius: 12,
    padding: 12,
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    height: height * 0.12,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  infoBlock: {
    flex: 1,
    justifyContent: "space-between",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  processRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  processImage: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 6,
  },
  processText: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.blue,
  },
  productName: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.blue,
    fontWeight: "700",
  },
  orderText: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    marginVertical: 2,
  },
  priceText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight: "700",
  },
  dateText: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  detailsButton: {
    alignSelf: "flex-end",
    marginVertical: 19,
  },
  detailsText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.red,
    textDecorationLine: "underline",
    marginRight:15,
    fontWeight:600
  },
});

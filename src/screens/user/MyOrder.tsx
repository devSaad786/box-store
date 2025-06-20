import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";
import images from "../../assets/images";
import BackHeader from "../../components/BackHeader";
import { useNavigation } from "@react-navigation/native";

const MyOrders = [
  {
    product: "Product Name 001...",
    image: images.van,
    process: "Inprocess",
    order: "Order# 236589",
    price: "$294.00",
    date: "July 11, 2023",
  },
  {
    product: "Product Name 001...",
    image: images.van,
    process: "Inprocess",
    order: "Order# 236589",
    price: "$294.00",
    date: "July 11, 2023",
  },
  {
    product: "Product Name 001...",
    image: images.tick,
    process1: "Completed",
    order: "Order# 236590",
    price: "$294.00",
    date: "July 11, 2023",
  },
  {
    product: "Product Name 001...",
    image: images.tick,
    process1: "Completed",
    order: "Order# 236590",
    price: "$294.00",
    date: "July 11, 2023",
  },
  {
    product: "Product Name 001...",
    image: images.tick,
    process1: "Completed",
    order: "Order# 236590",
    price: "$294.00",
    date: "July 11, 2023",
  },
];

const MyOrder = () => {
  const navigation = useNavigation<any>();

  const renderItem = ({ item, index }) => {
    const processLabel = item.process || item.process1;
    const processColor = item.process ? colors.blue : colors.black;

    const handlePress = () => {
      if (index < 2) {
        navigation.navigate("OrderStatus");
      } else {
        navigation.navigate("OrderStatus1");
      }
    };

    return (
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <View style={styles.infoBlock}>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.productName}>{item.product}</Text>
            <View style={styles.processRow}>
              {item.image && (
                <Image source={item.image} style={styles.processImage} />
              )}
              <Text style={[styles.statusText, { color: processColor }]}>
                {processLabel}
              </Text>
            </View>
          </View>
          <Text style={styles.orderText}>{item.order}</Text>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     <BackHeader
  isBack={true}
  title="My Order"
  isShopping={true}
  onBackPress={() => navigation.goBack()}
  onShoppingPress={() => navigation.navigate("MyCart")} // 👈 Change "Cart" to your desired screen
/>
      <FlatList
        data={MyOrders}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    height: height * 0.13,
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
  productName: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: "700",
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
  statusText: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansSemiBold,
  },
  orderText: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    marginTop: 4,
    marginBottom: 6,
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
});

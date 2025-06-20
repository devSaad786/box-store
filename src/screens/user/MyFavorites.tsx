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

const MyFavorite = [
  {
    image: images.product,
    product: "Product Name",
    image2: images.heart,
    title: "SKU: 3265896",
    price: "$150.00",
  },
  {
    image: images.product,
    product: "Product Name",
    image2: images.heart,
    title: "SKU: 3265896",
    price: "$150.00",
  },
  {
    image: images.product,
    product: "Product Name",
    image2: images.heart,
    title: "SKU: 3265896",
    price: "$150.00",
  },
  {
    image: images.product,
    product: "Product Name",
    image2: images.heart,
    title: "SKU: 3265896",
    price: "$150.00",
  },
];

const MyFavorites = () => {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.rowBetween}>
          <Text style={styles.productName}>{item.product}</Text>
          <Image source={item.image2} style={styles.heartIcon} />
        </View>
        <Text style={styles.sku}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        isBack={true}
        title="My Favorites"
        isShopping={true}
        onBackPress={() => navigation.goBack()}
        onShoppingPress={() => navigation.navigate("MyCart")}
      />
      <FlatList
        data={MyFavorite}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MyFavorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 16,
    width: width * 0.89,
    height: height * 0.15,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  imageWrapper: {
    width: width * 0.29,
    height: height * 0.14,
    marginTop: -13,
    marginRight: 10,
  },
  productImage: {
    width: width * 0.25,
    height: height * 0.18,
    marginLeft: 10,
  },
  infoBlock: {
    flex: 1,
    justifyContent: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: "700",
    marginBottom: 8,
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 20,
  },
  sku: {
    fontSize: fontSizes.sm,
    color: colors.black,
    fontFamily: fontFamily.OpenSansRegular,
    marginBottom: 20,
  },
  price: {
    fontSize: fontSizes.md,
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
    fontWeight: "700",
    top: 10,
  },
});

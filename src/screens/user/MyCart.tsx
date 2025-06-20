import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import BackHeader from "../../components/BackHeader";
import CustomButton from "../../components/CustomButton";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";
import images from "../../assets/images";

import CustomModal from "../../components/CustomModal";


const initialCart = [
  {
    id: "1",
    image: images.product,
    product: "Product Name",
    title: "SKU: 3265896",
    price: 150.0,
    quantity: 1,
  },
  {
    id: "2",
    image: images.product,
    product: "Product Name",
    title: "SKU: 3265896",
    price: 150.0,
    quantity: 1,
  },
];

const MyCart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const navigation = useNavigation();
     const [isModalVisible, setModalVisible] = useState(false);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.productImageWrapper}>
          <Image source={item.image} style={styles.productImage} />
        </View>
        <View style={styles.details}>
          <Text style={styles.productName}>{item.product}</Text>
          <Text style={styles.sku}>{item.title}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity  onPress={() => setModalVisible(true)}  >
          <Image source={images.trash} style={styles.trash} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, -1)}
            style={[styles.qtyButton, { backgroundColor: "#d3d3d3" }]}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 1)}
            style={[styles.qtyButton, { backgroundColor: colors.red }]}
          >
            <Text style={[styles.qtyText, { color: colors.white }]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        ismenu={true}
        title="My Cart"
        isNotification={true}
        onmenuPress={() => navigation.openDrawer()}
        onNotificationPress={() => navigation.navigate("Notifications")}
      />

      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          scrollEnabled={false}
        />
      )}

      <View style={styles.cont}>
        <Text style={styles.totalLabel}>Total Amount</Text>
        <Text style={styles.totalAmount}>${getTotalAmount()}</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Check Out"
          fontSize={fontSizes.lg2}
          btnHeight={height * 0.07}
          btnWidth={width * 0.89}
          textColor={colors.white}
          color={colors.red}
          borderRadius={50}
          onPress={() => navigation.navigate("Checkout")}
        />
      </LinearGradient>
      <CustomModal
  visible={isModalVisible}
  message="porem ispum dolor sit amet,consectetur,adpicing elit.Integer "
  customButton={
    <View style={{ flexDirection: 'row', gap: 10, marginTop: 24 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain1}
      >
        <CustomButton
          text="Yes"
          fontSize={fontSizes.lg}
          color={colors.gray}
          btnHeight={height * 0.06}
          btnWidth={(width * 0.86)/ 2 - 25}
          textColor={colors.black}
          borderRadius={60}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("MyCart");
          }}
        />
      </LinearGradient>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain1}
      >
        <CustomButton
          text="No"
          fontSize={fontSizes.lg}
          color={colors.red}
          btnHeight={height * 0.06}
          btnWidth={(width * 0.86)/ 2 - 25}
          textColor={colors.white}
          borderRadius={50}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("MyCart");
          }}
        />
      </LinearGradient>
    </View>
  }
/>
    </SafeAreaView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 16,
    width: width * 0.89,
    height: height * 0.15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    padding: 10,
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    flex: 1,
  },
  productImageWrapper: {
    width: width * 0.29,
    height: height * 0.14,
    marginTop: -24,
    marginRight: 1,
  },
  productImage: {
    width: width * 0.25,
    height: height * 0.18,
    marginRight: 10,
  },
  details: {
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  productName: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: "700",
    marginBottom: 8,
  },
  sku: {
    fontSize: fontSizes.sm,
    color: colors.black,
    fontFamily: fontFamily.OpenSansRegular,
    marginBottom: 10,
  },
  price: {
    fontSize: fontSizes.md,
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
    fontWeight: "700",
    top: 6,
  },
  rightSection: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  trash: {
    width: 20,
    height: 20,
    tintColor: colors.red,
    marginLeft: 50,
    marginTop: 10,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyButton: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 4,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: fontSizes.md,
    marginHorizontal: 6,
    fontFamily: fontFamily.OpenSansSemiBold,
  },
  totalLabel: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight: "800",
    marginLeft: 1,
  },
  totalAmount: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight: "700",
    marginRight: 2,
  },
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  gradientMain: {
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: Platform.OS === "ios" ? 250 : 20,
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: fontSizes.md,
    marginTop: 50,
    fontFamily: fontFamily.OpenSansRegular,
  },
  gradientMain1: {
    borderRadius: 50,
    overflow: 'hidden',   // VERY IMPORTANT! ensures radius clips the gradient edges
    justifyContent: 'center',
    alignItems: 'center',
  }
});


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
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ASSET_URL } from "../../service";

const Profile = () => {
  const navigation = useNavigation<any>();
  const handleMenuPress = () => navigation.openDrawer();
  const handleNotificationPress = () => navigation.navigate('Notifications');
  const {user} = useSelector<RootState>(val => val.role)
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader ismenu={true} title="Profile" isNotification={true}  onmenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress} />

      <View style={styles.cardContainer}>
        <Image source={user?.profilePicture?{uri: ASSET_URL + user?.profilePicture}:images.john} style={styles.john} />
        <View style={styles.textBlock}>
          <Text style={styles.name}>{`${user?.firstName} ${user?.lastName}`}</Text>
          <Text style={styles.detail}>{user?.email}</Text>
          <Text style={styles.detail}>{user?.phone}</Text>
        </View>
        <TouchableOpacity style={styles.chevronTouchable} onPress={() => navigation.navigate('MyProfile')}>
          <Ionicons name="chevron-forward" size={30} color={colors.red} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cardRow}  onPress={() => navigation.navigate("MyOrder")}>
        <Text style={styles.orderText}>My Orders</Text>
        <Ionicons name="chevron-forward" size={30} color={colors.red} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardRow}  onPress={() => navigation.navigate("Favorites")}>
        <Text style={styles.orderText}>My Favorites</Text>
        <Ionicons name="chevron-forward" size={30} color={colors.red} />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.cardRow}  onPress={() => navigation.navigate("ShippingAddress")}>
        <Text style={styles.orderText}>Shipping Address</Text>
        <Ionicons name="chevron-forward" size={30} color={colors.red} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardRow}  onPress={() => navigation.navigate("CardDetail")}>
        <Text style={styles.orderText}>Card Details</Text>
        <Ionicons name="chevron-forward" size={30} color={colors.red} />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    margin: 20,
    height: height * 0.2,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    position: "relative",
  },
  john: {
    width: width * 0.24,
    height: height * 0.11,
    borderRadius: 12,
    resizeMode: "cover",
    marginRight: 16,
  },
  textBlock: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
    paddingVertical: 25,
  },
  name: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight: "700",
  },
  detail: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    fontWeight: "500",
  },
  chevronTouchable: {
    position: "absolute",
    right: 15,
    bottom: 5,
    padding: 5,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    fontWeight:200
  },
});

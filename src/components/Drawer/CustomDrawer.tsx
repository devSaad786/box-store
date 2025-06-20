import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { FC, useState } from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import {
  CommonActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { height, width } from "../../utilities";
import { genericRatio } from "../../helper/helper";
import { colors } from "../../utilities/colors";
import { fontFamily } from "../../assets/fonts";
import { fontSizes } from "../../utilities/fontSizes";
import { useRoleContext } from "../../context/roleContext";
import BackHeader2 from "../BackHeader2";
import images from "../../assets/images";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slices/roleSlice";

const Divider = () => <View style={styles.divider} />;

const CustomDrawer: FC<DrawerContentComponentProps> = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const [isLogoutPressed, setIsLogoutPressed] = useState(false);

  const DrawerItemWithImage = ({
    label,
    imageSource,
    onPress,
  }: {
    label: string;
    imageSource: any;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.itemRow} onPress={onPress}>
      <View style={styles.itemTextWrapper}>
        <Image source={imageSource} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <BackHeader2 title="Welcome" onBackPress={() => navigation.goBack()} />

        <View style={{ marginTop: genericRatio(22) }}>
          <DrawerItemWithImage
            label="Home"
            imageSource={images.home1}
            onPress={() => navigation.navigate("BottomTab")}
          />
          <Divider />

          <DrawerItemWithImage
            label="Chat"
            imageSource={images.chatt}
            onPress={() => navigation.navigate("Chat")}
          />
          <Divider />

          <DrawerItemWithImage
            label="Settings"
            imageSource={images.settings}
            onPress={() => navigation.navigate("Settings")}
          />
          <Divider />

          <DrawerItemWithImage
            label="Cart"
            imageSource={images.cart1}
            onPress={() => navigation.navigate("MyCart")}
          />
          <Divider />

          <DrawerItemWithImage
            label="Help & Feedback"
            imageSource={images.helpandfeedback}
            onPress={() => navigation.navigate("HelpAndFeedback")}
          />
          <Divider />

          <DrawerItemWithImage
            label="Favorite"
            imageSource={images.favortie}
            onPress={() => navigation.navigate("Favorites")}
          />
          <Divider />

          {/* Category (no image, chevron-down) */}
          <TouchableOpacity style={styles.itemRow} onPress={() => {}}>
            <View style={[styles.itemTextWrapper, { width: "100%",  }]}>
              <Text style={styles.label}>Category</Text>
              <Entypo name="chevron-down" size={20} color={colors.red} />
            </View>
          </TouchableOpacity>
          <Divider />

          <DrawerItemWithImage
            label="Terms & Condition"
            imageSource={images.termsandcondition}
            onPress={() => navigation.navigate("TermsAndConditions")}
          />
          <Divider />

          <DrawerItemWithImage
            label="Privacy Policy"
            imageSource={images.privacypolicy}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          />
          <Divider />

          {/* Logout */}
          <TouchableOpacity
            style={[
              styles.itemRow,
              styles.logoutItem,
              styles.logoutDefault,
            ]}
            onPressIn={() => setIsLogoutPressed(true)}
            onPressOut={() => {
              setIsLogoutPressed(false);
              navigation.navigate("RoleSelector");
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "RoleSelector" }],
                })
              );
              dispatch(removeUser())
            }}
          >
            <View style={styles.itemTextWrapper}>
              {/* <Feather
                name="log-out"
                size={22}
                color={colors.white}
              /> */}
              <Image
              source={images.logout}
              style={styles.log}
              />
              <Text
                style={[
                  styles.logout,
                  {color:colors.white},
                ]}
              >
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    width: "100%",
  },
  label: {
    fontSize: fontSizes.sm2,
    fontWeight: "500",
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    marginLeft: genericRatio(12),
  },
  logout: {
    fontSize: fontSizes.lg2,
    fontWeight: "700",
    fontFamily: fontFamily.OpenSansBold,
    marginLeft: genericRatio(10),
  },
  logoutItem: {
    paddingHorizontal: width * 0.07,
    paddingVertical: height * 0.015,
    width: width * 0.42,
    right: width * 0.03
  },
  log:{
    width: width * 0.05,
    height: width * 0.05
  },
  logoutDefault: {
    backgroundColor: "#C60937", 
    marginTop:70

  },
  logoutPressed: {
    backgroundColor: "red",
  },
  divider: {
    height: 0.4,
    backgroundColor: "#ccc",
    marginHorizontal: genericRatio(16),
    marginVertical: genericRatio(2),
  },
  itemRow: {
    paddingHorizontal: genericRatio(16),
    paddingVertical: genericRatio(10),
  },
  itemTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: genericRatio(20),
    height: genericRatio(20),
    resizeMode: "contain",
  },
});

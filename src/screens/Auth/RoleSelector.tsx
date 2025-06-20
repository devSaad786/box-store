import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import images from "../../assets/images";
import { height, width } from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { useRoleContext } from "../../context/roleContext";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from "../../redux/slices/roleSlice";

const RoleSelector: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();
  // const selectedRole = useSelector<RootState>(val => val.role.selectedRole);
  const handleRoleSelector = (role:any) => {
    dispatch(setRole(role));
    navigation.navigate('PreLogin');
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Logo */}
          <View style={styles.logoMain}>
            <Image source={images.Nonstop} style={styles.logo} />
            <Text style={{
              fontFamily: fontFamily.OpenSansBold,
              fontSize: fontSizes.xl,
              color: "#000"
            }}>Box Store</Text>
          </View>

          {/* Buttons */}
          <View style={styles.inputMain}>
            
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.gradient1, colors.gradient2]}
                style={styles.gradientMain}
              >
                <CustomButton
                  text={`Continue as  a User`}
                  fontSize={fontSizes.lg}
                  color={colors.gray}
                  pressedColor={colors.red}
                  textColor={colors.black}
                  pressedTextColor={colors.white}
                  btnHeight={height * 0.08}
                  btnWidth={width * 0.85}
                  borderRadius={50}
                  onPress={() => handleRoleSelector("user")}
                />
              </LinearGradient>
            
          </View>

          {/* Terms and Privacy */}
          <View style={styles.agreeView}>
            <Text style={styles.agreeTextLine1}>By sign-in, you agree to our</Text>
            <View style={styles.agreeLinksRow}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TermsAndConditions", { platform: Platform.OS })
                }
              >
                <Text style={styles.agreeLink}>Terms & Conditions</Text>
              </TouchableOpacity>
              <Text style={styles.andText}> and </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PrivacyPolicy", { platform: Platform.OS })
                }
              >
                <Text style={styles.agreeLink}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default RoleSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingVertical: height * 0.05,
  },
  logoMain: {
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? height * 0.06 : height * 0.05,
  },
  logo: {
    width: width * 0.56,
    height: height * 0.3,
    resizeMode: "cover",
    marginTop: Platform.OS === "ios" ? height * 0.02 : height * 0.04,
  },
  inputMain: {
    // marginTop: height * 0.04,
    // gap: height * 0.025,
    alignItems: "center",
  },
  gradientMain: {
    borderRadius: 30,
  },
  agreeView: {
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? height * 0.13 : height * 0.13,
    marginBottom: height * -0.02,
  },
  agreeTextLine1: {
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
    textAlign: "center",
  },
  agreeLinksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  agreeLink: {
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
  },
  andText: {
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
  },
});

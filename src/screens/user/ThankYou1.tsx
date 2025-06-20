import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";
import images from "../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ThankYou1 = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={images.thumb} style={styles.thumb} />

        <Text style={styles.text1}>Thank You!</Text>
        <Text style={styles.text2}>Your order has been placed</Text>

        <View style={styles.inputMain}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[colors.gradient1, colors.gradient2]}
            style={styles.gradientMain}
          >
            <CustomButton
              text="Go Back"
              fontSize={fontSizes.lg}
              color={colors.red}
              btnHeight={height * 0.08}
              btnWidth={width * 0.85}
              textColor={colors.white}
              borderRadius={50}
              onPress={() => navigation.goBack()}
            />
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThankYou1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  thumb: {
    width: width * 0.9,
    height: width * 0.4,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text1: {
    fontSize: fontSizes.xl,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight: "900",
    marginBottom: 5,
  },
  text2: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  inputMain: {
    marginTop: 30,
  },
  gradientMain: {
    borderRadius: 50,
  },
});

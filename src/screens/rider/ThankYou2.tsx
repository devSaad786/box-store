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
  import React from "react";
  import LinearGradient from "react-native-linear-gradient";
  import CustomButton from "../../components/CustomButton";
  import { useNavigation } from "@react-navigation/native";
  
  const ThankYou2 = () => {
    const navigation = useNavigation<any>();
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image source={images.thumb} style={styles.thumb} />
          <Text style={styles.text1}>Great Job!</Text>
          <Text style={styles.text2}>You Have Compeleted Your Job</Text>
  
          <View style={styles.inputMain}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.gradient1, colors.gradient2]}
              style={styles.gradientMain}
            >
              <CustomButton
                text="Back to home"
                fontSize={fontSizes.lg}
                color={colors.gray}
                btnHeight={height * 0.08}
                btnWidth={(width * 0.90) / 2 - 15}
                textColor={colors.black}
                borderRadius={50}
                onPress={() => navigation.navigate("Home")}
              />
            </LinearGradient>
  
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.gradient1, colors.gradient2]}
              style={styles.gradientMain}
            >
              <CustomButton
                text="Start New Job"
                fontSize={fontSizes.lg}
                color={colors.red}
                btnHeight={height * 0.08}
                btnWidth={(width * 0.90) / 2 - 15}
                textColor={colors.white}
                borderRadius={50}
                onPress={() => navigation.navigate("JobDetail")}
              />
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ThankYou2;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 20, // replaces marginBottom
    },
    content: {
      alignItems: "center",
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
    },
    text2: {
      fontSize: fontSizes.md,
      fontFamily: fontFamily.OpenSansRegular,
      color: colors.black,
    },
    inputMain: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 30,
      width: width * 0.85,
    },
    gradientMain: {
      borderRadius: 50,
    },
  });
  
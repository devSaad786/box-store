import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import images from "../../assets/images";
import { width,height } from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import MapView, { Marker } from 'react-native-maps';
import CustomTab from "../../components/CustomTab";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Helpandfeedback = () => {
   const navigation = useNavigation<any>();
    return (
      <SafeAreaView style={styles.safeArea}>
        <BackHeader isBack={true} title="Help & Feedback" onBackPress={() => navigation.goBack()}  />
        <CustomTab/>
        {/* <View style={styles.inputMain}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.gradient1, colors.gradient2]}
              style={styles.gradientMain}
            >
              <CustomButton
                text="Submit"
                fontSize={fontSizes.lg}
                color={colors.red}
                btnHeight={height * 0.08}
                btnWidth={width * 0.85}
                textColor={colors.white}
                borderRadius={50}
                onPress={() => {}}
              />
            </LinearGradient>
            </View> */}
        </SafeAreaView>
    )
}

export default Helpandfeedback;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:colors.white
   
  },
  inputMain: {
  
   marginBottom:15,
    alignItems: "center",
  },
  gradientMain: {
    borderRadius: 30,
  },
});
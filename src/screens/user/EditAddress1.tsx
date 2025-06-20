import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import CustomTextInput from "../../components/CustomTextInput";
import CustomGooglePlacesInput from "../../components/GooglePlaceAutoComplete";
import CustomPhoneInput1 from "../../components/CustomPhoneInput1";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { height, width } from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { useNavigation } from '@react-navigation/native';


const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const EditAddress1 = () => {
    const navigation = useNavigation<any>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader isBack={true} title="Edit Address" onBackPress={() => navigation.goBack()}/>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
          <View style={styles.Container1}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.86}
              placeholder="John Smith"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
          </View>

          <View style={styles.Container2}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.86}
              placeholder="698 Cantebury Drive"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
          </View>

          <View style={styles.rowInputContainer}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="United State"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
              showRightChevron={true}
            />
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="New York"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
              showRightChevron={true}
            />
          </View>

          <View style={styles.rowInputContainer}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="10011"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="NY"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
              showRightChevron={true}
            />
          </View>

          <View style={styles.Container2}>
            <CustomGooglePlacesInput
              onPlaceSelected={(data, details) => {
                console.log("Selected:", data, details);
              }}
              placeholder=" Add location"
              inputHeight={height * 0.07}
              inputWidth={width * 0.86}
              placeholderTextColor="rgba(0,0,0,0.5)"
              showLocationIcon={true}
              onLocationPress={() => console.log("Use current location")}
              borderRadius={50}
            />
          </View>

          <View style={styles.phoneInputContainer}>
            <CustomPhoneInput1
              placeholder="Enter phone number"
              inputWidth={0.85}
              inputHeight={height * 0.07}
              value={phoneNumber}
              onChangeText={(text: string) => setPhoneNumber(text.replace(/[^0-9]/g, ""))}
              borderRadius={50}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <View style={styles.buttonRow}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientButton}
        >
          <CustomButton
            text="Delete Address"
            fontSize={fontSizes.lg}
            color={colors.gray}
            btnHeight={height * 0.08}
            btnWidth={width * 0.5}
            textColor={colors.black}
            borderRadius={50}
            onPress={() => navigation.navigate("ShippingAddress")}
          />
        </LinearGradient>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientButton}
        >
          <CustomButton
            text="Save"
            fontSize={fontSizes.lg}
            color={colors.red}
            btnHeight={height * 0.08}
            btnWidth={width * 0.5}
            textColor={colors.white}
            borderRadius={50}
            onPress={() => navigation.navigate("ShippingAddress")}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default EditAddress1;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  Container1: {
    marginTop: 10,
  },
  Container2: {
    marginTop: 15,
  },
  rowInputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.85,
    gap: 10,
  },
  phoneInputContainer: {
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    gap: 15,
  },
  gradientButton: {
    flex: 1,
    alignItems: "center",
    borderRadius: 50,
  },
});

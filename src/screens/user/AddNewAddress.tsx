import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { useRoleContext } from "../../context/roleContext";
import images from "../../assets/images";
import CustomImageUploadModal from "../../components/CustomUploadModal";
import { width, height } from "../../utilities";
import CustomTextInput from "../../components/CustomTextInput";
import { colors } from "../../utilities/colors";
import CustomGooglePlacesInput from "../../components/GooglePlaceAutoComplete";
import CustomPhoneInput from "../../components/CustomPhoneInput";
import CustomPhoneInput1 from "../../components/CustomPhoneInput1";
import { FC, SetStateAction, } from 'react';
import CustomTextInput1 from "../../components/CustomTextInput1";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { fontSizes } from "../../utilities/fontSizes";


const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
 

  const AddNewAddress = () => {
     const [phoneNumber, setPhoneNumber] = useState<string>('');
     return (
        <SafeAreaView style={styles.safeArea}>
          <BackHeader isBack={true} title="Add New Address" />
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
              placeholder="Contact Person"
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
              placeholder="Address"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
           </View>
           <View style={styles.rowInputContainer1}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="Country"
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
              placeholder="City"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
              showRightChevron={true}
            />
          </View>
          <View style={styles.rowInputContainer2}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="Postal Code"
              keyboardType="default"
              textColor="black"
              borderRadius={50}
              placeholderTextColor="rgba(0,0,0,0.5)"
           
            />
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.4}
              placeholder="State"
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
              onLocationPress={() => console.log('Use current location')}
              borderRadius={50}
            />
          </View>
          <View style={styles.texti}>
          <CustomPhoneInput1
  placeholder="Enter phone number"
  inputWidth={0.85}
  inputHeight={height * 0.07}
  value={phoneNumber}
  onChangeText={(text: string) => setPhoneNumber(text.replace(/[^0-9]/g, ''))}
  borderRadius={50}
/>  
</View>
                   </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>
                        <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.gradient1, colors.gradient2]}
              style={styles.gradientMain}
            >
              <CustomButton
                text="Add Address"
                fontSize={fontSizes.lg}
                color={colors.red}
                btnHeight={height * 0.08}
                btnWidth={width * 0.85}
                textColor={colors.white}
                borderRadius={50}
                onPress={() => {}}
              />
            </LinearGradient>
                                            </SafeAreaView>
                    )
  }

  export default AddNewAddress;
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
        marginTop: 10
      },
      Container2: {
        marginTop: 15
      },
      rowInputContainer1: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.85,
        gap: 10,
      },
      rowInputContainer2: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.85,
        gap: 10,
      },
      gradientMain:{
        alignSelf:'center'
       }
});
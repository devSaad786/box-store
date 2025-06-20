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
  ScrollView,
  Image,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { useRoleContext } from "../../context/roleContext";
import images from "../../assets/images";
import CustomImageUploadModal from "../../components/CustomUploadModal";
import { width, height } from "../../utilities";
import CustomTextInput from "../../components/CustomTextInput";
import { colors } from "../../utilities/colors";
import CustomGooglePlacesInput from "../../components/GooglePlaceAutoComplete";
import CustomPhoneInput1 from "../../components/CustomPhoneInput1";
import CustomTextInput1 from "../../components/CustomTextInput1";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { fontSizes } from "../../utilities/fontSizes";
import { useNavigation } from "@react-navigation/native";

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const SecondProfile1 = () => {
  const navigation = useNavigation<any>();
  const [modalOpen, setModalOpen] = useState(false);
  const { role } = useRoleContext();
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState("");

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleGalleryUpload = () => {
    console.log("Upload from Gallery");
    toggleModal();
  };

  const handleCameraUpload = () => {
    console.log("Upload from Camera");
    toggleModal();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader isBack={true} title="Edit Profile" onBackPress={() => navigation.goBack()} />

      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.imageContainer}>
              <ImageBackground
                source={images.john}
                style={styles.profileImage}
                imageStyle={{ borderRadius: 100 }}
              >
                <Pressable style={styles.cameraButton} onPress={toggleModal}>
                  <Image source={images.camera3} style={styles.cameraIcon} />
                </Pressable>
              </ImageBackground>
            </View>

            <View style={styles.rowInputContainer}>
              <CustomTextInput
                backgroundColor={colors.white}
                inputHeight={height * 0.07}
                inputWidth={width * 0.4}
                placeholder="John"
                keyboardType="default"
                textColor="black"
                borderRadius={50}
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
              <CustomTextInput
                backgroundColor={colors.white}
                inputHeight={height * 0.07}
                inputWidth={width * 0.4}
                placeholder="Smith"
                keyboardType="default"
                textColor="black"
                borderRadius={50}
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
            </View>

            <View style={styles.Container}>
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

            <View style={styles.rowInputContainer1}>
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

            <View style={styles.rowInputContainer1}>
              <CustomTextInput
                backgroundColor={colors.white}
                inputHeight={height * 0.07}
                inputWidth={width * 0.4}
                placeholder="United States"
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

            <View style={styles.Container}>
              <CustomGooglePlacesInput
                onPlaceSelected={(data, details) => {
                  console.log("Selected:", data, details);
                }}
                placeholder="Add location"
                inputHeight={height * 0.06}
                inputWidth={width * 0.85}
                placeholderTextColor="rgba(0,0,0,0.5)"
                showLocationIcon={true}
                onLocationPress={() => console.log("Use current location")}
                borderRadius={50}
              />
            </View>

            <View style={styles.texti}>
              <CustomPhoneInput1
                placeholder="Enter phone number"
                inputWidth={0.85}
                inputHeight={height * 0.07}
                value={phoneNumber}
                onChangeText={(text: string) =>
                  setPhoneNumber(text.replace(/[^0-9]/g, ""))
                }
                borderRadius={50}
              />
            </View>

            <View style={styles.Container3}>
              <CustomTextInput1
                backgroundColor={colors.white}
                placeholder="john.smith@domain.com"
                inputWidth={width * 0.85}
                inputHeight={height * 0.07}
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </View>

            <CustomImageUploadModal
              modalOpen={modalOpen}
              toggleModal={toggleModal}
              gallery={handleGalleryUpload}
              camera={handleCameraUpload}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Save"
          fontSize={fontSizes.lg}
          color={colors.red}
          btnHeight={height * 0.08}
          btnWidth={width * 0.85}
          textColor={colors.white}
          borderRadius={50}
          onPress={() => navigation.navigate('MyProfile1')}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SecondProfile1;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.red,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 20,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  rowInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.85,
    gap: 10,
  },
  Container: {
    marginTop: 20,
  },
  rowInputContainer1: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.85,
    gap: 10,
  },
  texti: {
    marginBottom: 9,
  },
  Container3: {
    marginBottom: 30,
  },
  gradientMain: {
    alignSelf: "center",
  },
});

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
  Text,
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

const FirstProfile1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { role } = useRoleContext();
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation<any>();
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleGalleryUpload = () => {
    console.log("Upload from Gallery");
    toggleModal();
  };

  const handleCameraUpload = () => {
    console.log("Upload from Camera");
    toggleModal();
  };

  const handleSelectVehicle = (vehicle: string) => {
    if (selectedVehicles.includes(vehicle)) {
      setSelectedVehicles(selectedVehicles.filter(v => v !== vehicle));
    } else {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader isBack={true} title="Create Profile" isnumber={true} onBackPress={() => navigation.goBack()} />

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.container}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.imageContainer}>
                <Pressable onPress={toggleModal}>
                  <ImageBackground
                    source={images.john}
                    style={styles.profileImage}
                    imageStyle={{ borderRadius: 100 }}
                  />
                </Pressable>
              </View>

              <View style={styles.rowInputContainer}>
                <CustomTextInput
                  backgroundColor={colors.white}
                  inputHeight={height * 0.07}
                  inputWidth={width * 0.4}
                  placeholder="First Name"
                  keyboardType="default"
                  textColor="black"
                  borderRadius={50}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                />
                <CustomTextInput
                  backgroundColor={colors.white}
                  inputHeight={height * 0.07}
                  inputWidth={width * 0.4}
                  placeholder="Last Name"
                  keyboardType="default"
                  textColor="black"
                  borderRadius={50}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                />
              </View>

              <View style={styles.marginTop}>
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
                  showRightChevron={true}
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

              <View style={styles.marginTop}>
                <CustomGooglePlacesInput
                  onPlaceSelected={(data, details) => {
                    console.log("Selected:", data, details);
                  }}
                  placeholder=" Add location"
                  inputHeight={height * 0.06}
                  inputWidth={width * 0.85}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  showLocationIcon={true}
                  onLocationPress={() => console.log('Use current location')}
                  borderRadius={50}
                />
              </View>

              <View style={styles.marginVertical}>
                <CustomPhoneInput1
                  placeholder="Enter phone number"
                  inputWidth={0.85}
                  inputHeight={height * 0.07}
                  value={phoneNumber}
                  onChangeText={(text: string) => setPhoneNumber(text.replace(/[^0-9]/g, ''))}
                  borderRadius={50}
                />
              </View>

              <View style={styles.marginBottom}>
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

              {/* Vehicle Section */}
              <View style={styles.vehicleHeader}>
                <Text style={styles.vehicleTitle}> Vehicle Type</Text>
              </View>

              <View style={styles.vehicleRow}>
                {[
                  { key: 'bicycle', label: 'Bicycle', image: images.bike },
                  { key: 'car', label: 'Car', image: images.car },
                  { key: 'motorcycle', label: 'Motorcycle', image: images.moped },
                ].map((item) => (
                  <Pressable
                    key={item.key}
                    onPress={() => handleSelectVehicle(item.key)}
                    style={styles.vehicleItemRow}
                  >
                    <View
                      style={[
                        styles.imageCircle,
                        selectedVehicles.includes(item.key) && { backgroundColor: colors.blue },
                      ]}
                    >
                      <Image source={item.image} style={styles.vehicleImage} />
                    </View>
                    <Text
                      style={[
                        styles.vehicleLabel,
                        selectedVehicles.includes(item.key) && { color: colors.red },
                      ]}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}
        >
          <CustomButton
            text="Continue"
            fontSize={fontSizes.lg}
            color={colors.red}
            textColor={colors.white}
            btnHeight={height * 0.08}
            btnWidth={width * 0.85}
            borderRadius={50}
            onPress={() => navigation.navigate('License')}
          />
        </LinearGradient>
      </KeyboardAvoidingView>

      <CustomImageUploadModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        gallery={handleGalleryUpload}
        camera={handleCameraUpload}
      />
    </SafeAreaView>
  );
};

export default FirstProfile1;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    padding: 16,
    paddingBottom: 120,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
  },
  rowInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.85,
    gap: 10,
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
  marginTop: {
    marginTop: 20,
  },
  marginVertical: {
    marginVertical: 10,
  },
  marginBottom: {
    marginBottom: 40,
  },
  gradientMain: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08,
    width: width * 0.85,
    borderRadius: 50,
  },
  vehicleHeader: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 10,
    marginBottom: 10,
  },
  vehicleTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '700',
    color: colors.blue,
  },
  vehicleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  vehicleItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    gap: 8,
  },
  imageCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicleImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  vehicleLabel: {
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
});

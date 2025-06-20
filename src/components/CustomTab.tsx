import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomImageUploadModal from "./CustomUploadModal";
import CustomTextInput from "./CustomTextInput";
import { colors } from "../utilities/colors";
import { fontSizes } from "../utilities/fontSizes";
import { fontFamily } from "../assets/fonts";
import CustomButton from "./CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const CustomTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("FAQs");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [showAnswer, setShowAnswer] = useState(Array(5).fill(false));
   const navigation = useNavigation<any>();

  const toggleAnswer = (index) => {
    const updatedAnswers = [...showAnswer];
    updatedAnswers[index] = !updatedAnswers[index];
    setShowAnswer(updatedAnswers);
  };

  const toggleModal = () => setModalOpen(!modalOpen);

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera access",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const handleCameraUpload = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      alert("Camera permission is required!");
      return;
    }

    const options = {
      mediaType: "photo",
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImages((prev) => [...prev, response.assets[0].uri]);
      }
      toggleModal();
    });
  };

  const handleGalleryUpload = () => {
    const options = {
      mediaType: "photo",
      selectionLimit: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImages((prev) => [...prev, response.assets[0].uri]);
      }
      toggleModal();
    });
  };

  const handleImageRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {["FAQs", "Message"].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              style={styles.tabWrapper}
              onPress={() => setActiveTab(tab)}
            >
              <View style={styles.tabContent}>
                <Text
                  style={[
                    styles.tabText,
                    isActive && {
                      color: colors.red,
                      fontFamily: fontFamily.OpenSansBold,
                    },
                  ]}
                >
                  {tab}
                </Text>
                {isActive && <View style={styles.activeIndicator} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
        {activeTab === "FAQs" ? (
          <View style={styles.faqWrapper}>
            {Array(5).fill("Lorem ipsum dolormet, consectetur?").map((question, index) => (
              <View key={index}>
                <TouchableOpacity style={styles.cardRow} onPress={() => toggleAnswer(index)}>
                  <Text style={styles.orderText1}>{question}</Text>
                  <Ionicons name="chevron-down" size={24} color={colors.red} />
                </TouchableOpacity>

                {showAnswer[index] && (
                  <TouchableOpacity style={styles.cardAnswer} onPress={() => toggleAnswer(index)}>
                    <View style={styles.chevronWrapper}>
                      <Ionicons name="chevron-up" size={24} color={colors.red} />
                    </View>
                    <Text style={styles.orderText1}>{question}</Text>
                    <Text style={[styles.orderText, { marginTop: 10 }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.

                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.secMainInner}>
            <CustomTextInput
              backgroundColor={colors.white}
              inputHeight={height * 0.07}
              inputWidth={width * 0.85}
              placeholder="Subject"
              keyboardType="default"
              textColor={colors.black}
              borderRadius={50}
              placeholderTextColor={colors.black}
              value={subject}
              onChangeText={setSubject}
            />

            <View style={styles.inputGap} />

            <TextInput
              style={styles.messageInput}
              placeholder="Message"
              placeholderTextColor={colors.black}
              value={message}
              onChangeText={setMessage}
              multiline
            />

            {/* Horizontal ScrollView for Images */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollContainer}
            >
              {images.map((imageUri, index) => (
                <View key={index} style={styles.cardContainer}>
                  <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
                  <TouchableOpacity
                    style={styles.cancelIcon}
                    onPress={() => handleImageRemove(index)}
                  >
                    <Ionicons name="close-circle" size={24} color={colors.white} />
                  </TouchableOpacity>
                </View>
              ))}

              <TouchableOpacity onPress={toggleModal} style={styles.cardContainer}>
                <View style={styles.uploadCircle}>
                  <Ionicons name="add" size={30} color={colors.white} />
                </View>
              </TouchableOpacity>
              
            </ScrollView>
            <View style={styles.inputMain}>
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
                onPress={() => navigation.navigate("ThankYou1")} 
              />
            </LinearGradient>
            </View> 
          </View>
        )}
      </ScrollView>

      {/* Modal */}
      {modalOpen && (
        <CustomImageUploadModal
          modalOpen={modalOpen}
          toggleModal={toggleModal}
          gallery={handleGalleryUpload}
          camera={handleCameraUpload}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
    marginBottom: 15,
  },
  tabWrapper: { flex: 1, alignItems: "center" },
  tabContent: { alignItems: "center" },
  tabText: {
    fontSize: fontSizes.lg,
    color: colors.black,
    fontFamily: fontFamily.OpenSansRegular,
    fontWeight: "600",
  },
  activeIndicator: {
    marginTop: 5,
    height: 2,
    width: width * 0.45,
    backgroundColor: colors.red,
    borderRadius: 2,
  },
  contentArea: { paddingHorizontal: 20 },
  faqWrapper: { paddingBottom: 40 },
  secMainInner: { paddingBottom: 40, marginTop: 10 },
  inputGap: { height: 20 },
  messageInput: {
   height:height*0.2,
    width: width * 0.85,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    fontSize: 16,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    textAlignVertical: "top",
    elevation: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  horizontalScrollContainer: {
    paddingVertical: 20,
    paddingLeft: 10,
    alignItems: "center",
  },
  cardContainer: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: colors.gray,
    position: "relative",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  uploadCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelIcon: {
    position: "absolute",
    top: -5,
    right: -5,
   
    borderRadius: 50,
    padding: 5,
    zIndex: 1,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    width: width * 0.89,
    alignSelf: "center",
  },
  cardAnswer: {
    backgroundColor: colors.white,
    borderRadius: 40,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    width: width * 0.89,
    alignSelf: "center",
  },
  chevronWrapper: {
    position: "absolute",
    top: 15,
    right: 29,
  },
  orderText1: {
    flex: 1,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    marginRight: 10,
    fontWeight: "500",
  },
  orderText: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  inputMain: {
  
    marginTop:190,
     alignItems: "center",
   },
   gradientMain: {
     borderRadius: 30,
   },
});

export default CustomTab;

import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { colors } from "../utilities/colors";
import { fontSizes } from "../utilities/fontSizes";
import images from "../assets/images";
import { width, height } from "../utilities";
import CustomImageUploadModal from "./CustomUploadModal";

const CustomDocumentPicker = ({ onDocumentSelect }: { onDocumentSelect: (file: any) => void }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSide, setActiveSide] = useState<"front" | "back" | null>(null);
  const [frontImage, setFrontImage] = useState<any>(null);
  const [backImage, setBackImage] = useState<any>(null);

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

    launchCamera({ mediaType: "photo", saveToPhotos: true }, (response) => {
      if (response.assets?.length) {
        const image = response.assets[0];
        if (activeSide === "front") {
          setFrontImage(image);
          onDocumentSelect(image);
        } else if (activeSide === "back") {
          setBackImage(image);
          onDocumentSelect(image);
        }
      }
      toggleModal();
    });
  };

  const handleGalleryUpload = () => {
    launchImageLibrary({ mediaType: "photo", selectionLimit: 1 }, (response) => {
      if (response.assets?.length) {
        const image = response.assets[0];
        if (activeSide === "front") {
          setFrontImage(image);
          onDocumentSelect(image);
        } else if (activeSide === "back") {
          setBackImage(image);
          onDocumentSelect(image);
        }
      }
      toggleModal();
    });
  };

  const openModalForSide = (side: "front" | "back") => {
    setActiveSide(side);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      {/* Front Side Container */}
      <View style={styles.uploadContainer}>
        <Pressable
          style={styles.dottedContainer}
          onPress={() => openModalForSide("front")}
        >
          {frontImage?.uri ? (
            <Image source={{ uri: frontImage.uri }} style={styles.previewImage} />
          ) : (
            <Image source={images.document} style={styles.icon} resizeMode="contain" />
          )}
           <Text style={styles.label}>Upload Your Front Side</Text>
        </Pressable>
      
      </View>

      {/* Back Side Container */}
      <View style={styles.uploadContainer}>
        <Pressable
          style={styles.dottedContainer}
          onPress={() => openModalForSide("back")}
        >
          {backImage?.uri ? (
            <Image source={{ uri: backImage.uri }} style={styles.previewImage} />
          ) : (
            <Image source={images.document} style={styles.icon} resizeMode="contain" />
          )}
          <Text style={styles.label}>Upload Your Back Side</Text>
        </Pressable>
       
      </View>

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

export default CustomDocumentPicker;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  uploadContainer: {
    marginBottom: 30,
    alignItems: "center",
    width: width * 0.9,
  },
  dottedContainer: {
    width: "100%",
    height: height * 0.19,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.gray,
    borderStyle: "dotted",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  icon: {
    width: 40,
    height: 40,
  },
  previewImage: {
    width: 200,
    height: 120,
    borderRadius: 6,
  },
  label: {
    marginTop: 8,
    fontSize: fontSizes.md,
    color: colors.black,
  },
});

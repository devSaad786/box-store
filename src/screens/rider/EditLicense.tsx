import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { useNavigation } from "@react-navigation/native";
import { fontSizes } from "../../utilities/fontSizes";
import { colors } from "../../utilities/colors";
import CustomDocumentPicker from "../../components/DocumentPicker";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import { width,height } from "../../utilities";
import { fontFamily } from "../../assets/fonts";

const EditLicense = () => {
  const navigation = useNavigation<any>();
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="Edit License"
        
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}> Driving License</Text>
        {/* You can add your image picker or upload component here */}
      </View>
       <CustomDocumentPicker onDocumentSelect={(file) => console.log("File selected:", file)} />
       
      
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
                onPress={() => navigation.navigate("MyProfile1")} 
              />
            </LinearGradient>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
    },
    contentContainer: {
      paddingHorizontal: 30,
      marginTop: 30,
    },
    heading: {
      fontSize: fontSizes.lg,
      fontWeight: 700,
      color: colors.blue,
      fontFamily:fontFamily.OpenSansBold
    },
   
      gradientMain: {
          position: 'absolute',
          bottom: 25,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: height * 0.08,
          width: width * 0.85,
          borderRadius: 50,
        
    }
  });
  export default EditLicense;  
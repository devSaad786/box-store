import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Switch, // Make sure this is correctly imported
  Text,
  TouchableOpacity
} from "react-native";

import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import BackHeader from "../../components/BackHeader";
import { height, width } from "../../utilities";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";

const Settings3 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
   const [isModalVisible, setModalVisible] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="Settings"onBackPress={() => navigation.goBack()} />
      
      <View style={styles.card}>
        <Text style={styles.text}>Inactive Account</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: colors.red, true: colors.red }}
            thumbColor={isEnabled ? colors.white : colors.red}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch} // Apply the style for size reduction
          />
        </View>
      </View>
      <TouchableOpacity  onPress={() => setModalVisible(true)} >
      <View style={styles.card1}>
        <Text style={styles.text}>Delete Account </Text>
        </View>
        </TouchableOpacity>
        <CustomModal
  visible={isModalVisible}
  message="Are you sure you want to delete Account?"
  customButton={
    <View style={{ flexDirection: 'row', gap: 10, marginTop: 24 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Yes"
          fontSize={fontSizes.lg}
          color={colors.gray}
          btnHeight={height * 0.06}
          btnWidth={(width * 0.86)/ 2 - 25}
          textColor={colors.black}
          borderRadius={60}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("RoleSelector");
          }}
        />
      </LinearGradient>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="No"
          fontSize={fontSizes.lg}
          color={colors.red}
          btnHeight={height * 0.06}
          btnWidth={(width * 0.86)/ 2 - 25}
          textColor={colors.white}
          borderRadius={50}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("Settings3");
          }}
        />
      </LinearGradient>
    </View>
  }
/>
        </SafeAreaView>
    );
};

export default Settings3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.white, // Background color of the card
    borderRadius: 10, // Rounded corners
    padding: 20, // Padding inside the card
    marginTop: 25, // Margin on top of the card
   
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.87,
    height:height*0.08,
    alignSelf: 'center',
  },
  text: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    marginTop: 4, // Adjusted margin
    fontWeight:300
  },
  switchContainer: {
    flexDirection: "row", // Row layout
    alignItems: "center", // Vertically align switch with text
    justifyContent: "space-between", // Space between text and switch
  },
  switch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] // Scale down the switch to 80%
  },
  card1: {
    backgroundColor: colors.white, // Background color of the card
    borderRadius: 10, // Rounded corners
    padding: 20, // Padding inside the card
    marginTop: 15, // Margin on top of the card
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.87,
    height:height*0.08,
    alignSelf: 'center',
  },
  gradientMain: {
    borderRadius: 50,
    overflow: 'hidden',   // VERY IMPORTANT! ensures radius clips the gradient edges
    justifyContent: 'center',
    alignItems: 'center',
  }
    
});
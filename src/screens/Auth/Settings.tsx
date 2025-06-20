import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
} from "react-native";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import BackHeader from "../../components/BackHeader";
import { height, width } from "../../utilities";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";


const Settings = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);
 

  return (
    <SafeAreaView style={styles.container}>
     <BackHeader
  ismenu={true}
  isNotification={true}
  title="Settings"
  onmenuPress={() => navigation.openDrawer()}
  onNotificationPress={() => navigation.navigate("Notifications")}
/>

      <View style={styles.card}>
        <Text style={styles.text}>Push Notification</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: colors.red, true: colors.red }}
            thumbColor={isEnabled ? colors.white : colors.red}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Settings1")}>
        <View style={styles.card1}>
          <Text style={styles.text}>Account Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TermsAndConditions")}>
        <View style={styles.card1}>
          <Text style={styles.text}>Terms & Conditions</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
        <View style={styles.card1}>
          <Text style={styles.text}>Privacy Policy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("HelpAndFeedback")}>
        <View style={styles.card1}>
          <Text style={styles.text}>Help & Feedback</Text>
        </View>
      </TouchableOpacity>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Log Out"
          fontSize={fontSizes.lg2}
          btnHeight={height * 0.07}
          btnWidth={width * 0.89}
          textColor={colors.white}
          color={colors.red}
          borderRadius={50}
          onPress={() => navigation.navigate("RoleSelector")}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginTop: 25,
   
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.87,
    height: height * 0.09,
    alignSelf: "center",
  },
  card1: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
    
     shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.87,
    height: height * 0.09,
    alignSelf: "center",
  },
  text: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    marginTop: 4,
    fontWeight: "300",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  },
  gradientMain: {
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 20,
  },
});

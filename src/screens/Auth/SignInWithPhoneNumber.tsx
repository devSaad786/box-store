import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import images from "../../assets/images";
import { width, height } from "../../utilities";
import { FC, SetStateAction, useState } from 'react';
import { colors } from "../../utilities/colors";
import CustomPhoneInput from "../../components/CustomPhoneInput";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { fontSizes } from "../../utilities/fontSizes";
import { useNavigation } from "@react-navigation/native";
const Login1: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
const navigation = useNavigation<any>();
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <BackHeader isBack={true} title="Login" onBackPress={() => navigation.goBack()}/>

            <View style={styles.logoMain}>
              <Image source={images.Nonstop} style={styles.logo} />
            </View>

            <View style={styles.phoneInputContainer}>
            <CustomPhoneInput
    placeholder="Enter phone number"
    inputWidth={0.85}
    inputHeight={height * 0.06}
    value={phoneNumber}
    onChangeText={(text: SetStateAction<string>) => setPhoneNumber(text)}
    borderRadius={50}
    borderColor={colors.gray}
    borderWidth={1}
  />

              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.gradient1, colors.gradient2]}
                style={styles.gradientMain}
              >
                <CustomButton
                  text="Next"
                  fontSize={fontSizes.lg}
                  color={colors.red}
                
                  textColor={colors.white}

                  btnHeight={height * 0.08}
                  btnWidth={width * 0.85}
                  borderRadius={50}
                  onPress={() => navigation.navigate('OtpVerification')}
                />
              </LinearGradient>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login1;

const styles = StyleSheet.create({
  logoMain: {
    alignSelf: "center",
    marginTop: height * 0.09,
  },
  logo: {
    width: width * 0.56,
    height: height * 0.2,
    resizeMode: "contain",
  },
  phoneInputContainer: {
    width: width * 0.85,
    alignSelf: 'center',
    paddingTop: height * 0.025,
    gap: height * 0.02,
  },
  gradientMain: {
    borderRadius: 30,
  },
});

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import images from '../../assets/images';
import {width, height} from '../../utilities';
import {colors} from '../../utilities/colors';
import {fontSizes} from '../../utilities/fontSizes';
import {fontFamily} from '../../assets/fonts';
import {OtpInput} from 'react-native-otp-entry';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {genericRatio} from '../../helper/helper';
import React, {FC, useEffect, useState} from 'react';
import {
  CommonActions,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {apiHelper} from '../../service';
import Toast from 'react-native-toast-message';
import {setLogin, setToken, setUser} from '../../redux/slices/roleSlice';

const OtpVerification: FC<{route: RouteProp<ParamListBase, ''>}> = ({
  route,
}) => {
  const [key, setKey] = useState<number>(0);
  const [timerCode, setTimerCode] = useState<number>(59);
  const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const selectedRole = useSelector<RootState>(val => val.role.selectedRole);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsResendEnabled(false); // Disable resend button when timer starts
    setTimerCode(59); // Reset timer code
    setKey(prevKey => prevKey + 1); // Change key to restart CountdownCircleTimer

    return () => {
      setIsResendEnabled(false); // Disable resend button when timer starts
      setTimerCode(59); // Reset timer code
      setKey(prevKey => prevKey + 1);
    };
  }, []);

  const onCompleteTimer = (): void => {
    setIsResendEnabled(true);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const handleOtpFilled = async (text: string) => {
    const {response, error} = await apiHelper(
      'POST',
      'otp/verify-otp',
      {},
      {
        userId: route.params?.user?._id,
        otpCode: Number(text),
      },
    );
    console.log('Response: ', response?.data, route.params?.user?._id);
    if (response?.data) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      dispatch(setToken(response?.data?.data?.sessionToken));
      if (!response?.data?.data?.isProfileCompleted) {
        navigation.navigate('CreateProfile', {
          user: response?.data?.data,
        });
        return;
      }
      dispatch(setLogin());
      dispatch(setUser(response?.data?.data));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        }),
      );
      // navigation.navigate('CreateProfile');
    }
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
      });
    }
  };

  const handleResend = async (text: string) => {
    const {response, error} = await apiHelper(
      'POST',
      'otp/resend-otp',
      {},
      {
        userId: route.params?.user?._id,
      },
    );
    console.log('Response: ', response?.data, route.params?.user?._id);
    if (response?.data) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      setIsResendEnabled(false); // Disable resend button when timer starts
      setTimerCode(59); // Reset timer code
      setKey(prevKey => prevKey + 1);
      // navigation.navigate('CreateProfile');
    }
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.safeArea}>
        <BackHeader
          isBack={true}
          title="Verification"
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.contentContainer}>
          <Image source={images.Nonstop} style={styles.logo} />
          <Text style={styles.subtitle}>
            We sent you a six-digit verification
          </Text>
          <Text style={styles.subtitle}>code to verify your identity</Text>
          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={6}
              autoFocus={false}
              hideStick={true}
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              onTextChange={text => console.log('OTP Entered:', text)}
              onFilled={text => handleOtpFilled(text)}
              theme={{
                containerStyle: styles.otpInnerContainer,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              }}
            />
          </View>
          <View style={styles.timerContainer}>
            <CountdownCircleTimer
              isPlaying
              key={key}
              duration={timerCode}
              colors={['#C60937', '#FFF']}
              trailColor={'#FFF'}
              colorsTime={[6, 4]}
              size={height * 0.14}
              strokeWidth={4}
              onComplete={onCompleteTimer}>
              {({remainingTime}) => (
                <Text style={styles.timerText}>
                  {`00:${
                    remainingTime < 10 ? '0' + remainingTime : remainingTime
                  }`}
                </Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Code didn't recieved?</Text>
            <TouchableOpacity
              onPress={handleResend}
              disabled={!isResendEnabled}>
              <Text
                style={[styles.resend, !isResendEnabled && styles.disabled]}>
                {' '}
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default OtpVerification;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: height * 0.08,
    paddingHorizontal: 20,
  },
  logo: {
    width: width * 0.56,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: height * 0.03,
  },
  subtitle: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansMedium,
    color: colors.black,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
  },
  otpContainer: {
    marginTop: height * 0.05,
    alignItems: 'center',
  },
  otpInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
  },
  pinCodeContainer: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activePinCodeContainer: {
    borderColor: colors.red,
    backgroundColor: colors.white,
  },
  pinCodeText: {
    fontSize: fontSizes.lg,
    color: colors.black,
    fontFamily: fontFamily.OpenSansMedium,
  },
  timerContainer: {
    marginVertical: 20,
    width: height * 0.17,
    height: height * 0.17,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    top: height * 0.02,
  },
  timerText: {
    fontSize: fontSizes.md,
    color: colors.white,
    fontFamily: fontFamily.OpenSansMedium,
    fontWeight: 700,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -150,
    position: 'absolute',
  },
  resendText: {
    fontSize: fontSizes.md,
    color: colors.black,
    textAlign: 'center',
    fontWeight: 700,
  },
  resend: {
    color: colors.red,
    fontWeight: 700,
    fontSize: fontSizes.md,
  },
  disabled: {
    opacity: 0.5,
  },
});

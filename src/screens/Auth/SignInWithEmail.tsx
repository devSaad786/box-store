import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import BackHeader from '../../components/BackHeader';
import images from '../../assets/images';
import {height, width} from '../../utilities';
import CustomTextInput from '../../components/CustomTextInput';
import {colors} from '../../utilities/colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import {fontSizes} from '../../utilities/fontSizes';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fontFamily} from '../../assets/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {apiHelper} from '../../service';
import {useState} from 'react';
import Toast from 'react-native-toast-message';

const Login: React.FC = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const handleEmail = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Format',
        text2: 'Please enter a valid email address',
      });
      return;
    }
    const {response, error} = await apiHelper(
      'POST',
      'auth/signin',
      {},
      {
        email: email,
        deviceToken: 'abcdef123456',
        role: 'user',
      },
    );
    console.log('Response: ', response?.data);

    if (response?.data) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      navigation.navigate('OtpVerification', {
        user: response?.data?.data,
      });
    }
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error?.response?.data?.message || 'Something went wrong',
      });
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <BackHeader
        isBack={true}
        title="Login"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.logoMain}>
        <Image source={images.Nonstop} style={styles.logo} />
        <Text
          style={{
            fontFamily: fontFamily.OpenSansBold,
            fontSize: fontSizes.lg,
            color: '#000',
            textAlign: 'center',
          }}>
          Box Store
        </Text>
      </View>
      <View style={styles.secMainInner}>
        <CustomTextInput
          backgroundColor={colors.gray}
          inputHeight={height * 0.07}
          inputWidth={width * 0.85}
          placeholder="Enter Email Address"
          keyboardType="email-address"
          textColor={colors.black}
          borderRadius={50}
          placeholderTextColor={colors.black}
          showLeftIcon={true}
          onChangeText={val => setEmail(val)}
        />
        {/* <CustomTextInput
          backgroundColor={colors.gray}
          inputHeight={height * 0.07}
          inputWidth={width * 0.85}
          placeholder="Enter password"
          isPassword={true}
          customLeftIcon={
            <MaterialCommunityIcons
              name="lock"
              size={24}
              color={colors.red}
              style={{marginRight: 8}}
            />
          }
          textColor={colors.black}
          borderRadius={50}
          placeholderTextColor={colors.black}
          showLeftIcon={true}
        /> */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}>
          <CustomButton
            text="Continue"
            fontSize={fontSizes.lg}
            color={colors.red}
            textColor={colors.white}
            btnHeight={height * 0.08}
            btnWidth={width * 0.85}
            borderRadius={50}
            onPress={handleEmail}
          />
        </LinearGradient>
        {/* <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}>
          <CustomButton
            text="Signup"
            fontSize={fontSizes.lg}
            color={colors.red}
            textColor={colors.white}
            btnHeight={height * 0.08}
            btnWidth={width * 0.85}
            borderRadius={50}
            onPress={() => navigation.navigate('OtpVerification')}
          />
        </LinearGradient> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoMain: {
    alignSelf: 'center',
    marginTop: height * 0.09,
  },
  logo: {
    width: width * 0.56,
    height: height * 0.2,
    resizeMode: 'contain',
  },
  secMainInner: {
    width: width * 0.85,
    alignSelf: 'center',
    paddingTop: height * 0.025,
    height: '100%',
    gap: height * 0.02,
  },
  gradientMain: {
    borderRadius: 30,
  },
});

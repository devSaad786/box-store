import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {height, width} from '../../utilities';
import {colors} from '../../utilities/colors';
import {fontSizes} from '../../utilities/fontSizes';
import {fontFamily} from '../../assets/fonts';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import BackHeader from '../../components/BackHeader';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';

const PreLogin: React.FC = () => {
  const navigation = useNavigation<any>();
  const selectedRole = useSelector<RootState>(val => val.role.selectedRole);
  console.log(selectedRole, 'user roleeee');
  return (
    //   <ImageBackground source={images.background} style={styles.bg}>
    <SafeAreaView style={{flex: 1}}>
      {/* Header */}
      {/* <View style={styles.headerContainer}> */}
      <BackHeader
        isBack={true}
        title="Pre Login"
        onBackPress={() => navigation.goBack()}
      />

      {/* </View> */}

      {/* Logo */}
      <View style={styles.logoMain}>
        <Image source={images.Nonstop} style={styles.logo} />
        <Text
          style={{
            fontFamily: fontFamily.OpenSansBold,
            fontSize: fontSizes.xl,
            color: '#000',
            textAlign: 'center'
          }}>
          Box Store
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.inputMain}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}>
          <CustomButton
            text="Sign-in with Email Address"
            fontSize={fontSizes.lg}
            color={colors.gray}
            pressedColor={colors.red}
            textColor={colors.black}
            pressedTextColor={colors.white} // optional, already white
            btnHeight={height * 0.08}
            btnWidth={width * 0.85}
            borderRadius={50}
            onPress={() => navigation.navigate('Login')}
          />
        </LinearGradient>

        {/* Sign-in with Phone */}
        {/* <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}
        >
          <CustomButton
            text="Sign-in with Phone Number"
            fontSize={fontSizes.lg}
            color={colors.gray}
            pressedColor={colors.red}
            textColor={colors.black}
            pressedTextColor={colors.white} // 👈 text turns white on press
            btnHeight={height * 0.08}
            btnWidth={width * 0.85}
            borderRadius={50}
            onPress={() => navigation.navigate('Login1')}
          />
        </LinearGradient> */}
      </View>

      {/* Terms */}
      <View style={styles.agreeView}>
        <Text style={styles.agreeTextLine1}>By sign-in, you agree to our</Text>

        <View style={styles.agreeLinksRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <Text style={styles.agreeLink}>Terms & Conditions</Text>
          </TouchableOpacity>
          <Text style={styles.andText}> and </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.agreeLink}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    //   </ImageBackground>
  );
};

export default PreLogin;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerContainer: {
    //   paddingTop: height * 0.02,
    //   paddingHorizontal: width * 0.05,
  },
  logoMain: {
    alignSelf: 'center',
    marginTop: height * 0.15,
  },
  logo: {
    width: width * 0.56,
    height: height * 0.2,
    resizeMode: 'cover',
  },
  inputMain: {
    marginTop: height * 0.05,
    gap: height * 0.025,
    alignItems: 'center',
  },
  gradientMain: {
    borderRadius: 30,
  },
  agreeView: {
    alignItems: 'center',
    marginTop: height * 0.27,
  },
  agreeViewInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  agreeViewText: {
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
    fontWeight: '600',
  },
  agreeViewText2: {
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
    fontWeight: '700',
  },
  agreeTextLine1: {
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
  agreeLinksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  agreeLink: {
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
    fontWeight: 700,
  },
  andText: {
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
  },
});

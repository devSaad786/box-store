import React, {FC, useState} from 'react';
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
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {useRoleContext} from '../../context/roleContext';
import images from '../../assets/images';
import CustomImageUploadModal from '../../components/CustomUploadModal';
import {width, height} from '../../utilities';
import CustomTextInput from '../../components/CustomTextInput';
import {colors} from '../../utilities/colors';
import CustomGooglePlacesInput from '../../components/GooglePlaceAutoComplete';
import CustomPhoneInput1 from '../../components/CustomPhoneInput1';
import CustomTextInput1 from '../../components/CustomTextInput1';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import {fontSizes} from '../../utilities/fontSizes';
import {
  CommonActions,
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {apiHelper} from '../../service';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setLogin, setToken, setUser} from '../../redux/slices/roleSlice';

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const FirstProfile: FC<{route: RouteProp<ParamListBase, ''>}> = ({route}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const {role} = useRoleContext();
  const navigation = useNavigation<any>();
  const {user} = route.params;
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    firstName: '',
    lastName: '',
    phone: user?.phone,
    address: '',
    image: '',
  });

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleGalleryUpload = async () => {
    console.log('Upload from Gallery');
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      setBody({
        ...body,
        image: {
          name: new Date().toISOString() + result.assets[0].fileName,
          uri: result.assets[0].uri,
          type: result.assets[0].type,
        },
      });
      toggleModal();
    } catch (error) {
      console.log(error);
      toggleModal();
    }
  };

  const handleCameraUpload = async () => {
    console.log('Upload from Camera');
    try {
      const result = await launchCamera({
        mediaType: 'photo',
      });
      setBody({
        ...body,
        image: {
          name: new Date().toISOString() + result.assets[0].fileName,
          uri: result.assets[0].uri,
          type: result.assets[0].type,
        },
      });
      toggleModal();
    } catch (error) {
      console.log(error);
      toggleModal();
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('firstName', body?.firstName);
    formData.append('lastName', body?.lastName);
    formData.append('phone', body?.phone);
    formData.append('address', body?.address);
    formData.append('image', body?.image);

    const {response, error} = await apiHelper(
      'POST',
      'profiles/',
      {
        'Content-Type': 'multipart/form-data',
      },
      formData,
    );
    if (
      !body.address ||
      !body.firstName ||
      !body?.lastName ||
      !body?.image ||
      !body?.phone
    ) {
      Toast.show({
        type: 'info',
        text1: 'Validation Error.',
        text2: 'Please fill all fields',
      });
      return;
    }
    console.log("Response: ", response?.data?.data);
    
    if (response?.data) {
      dispatch(setLogin());
      dispatch(setUser(response?.data?.data));
      dispatch(setToken(response?.data?.data?.sessionToken));
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        }),
      );
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
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="Create Profile"
        onBackPress={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.container}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <View style={styles.imageContainer}>
                <Pressable onPress={toggleModal}>
                  <ImageBackground
                    source={
                      body?.image?.uri ? {uri: body?.image?.uri} : images.john
                    }
                    style={styles.profileImage}
                    imageStyle={{borderRadius: 100}}
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
                  value={body?.firstName}
                  onChangeText={val =>
                    setBody({
                      ...body,
                      firstName: val,
                    })
                  }
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
                  value={body?.lastName}
                  onChangeText={val =>
                    setBody({
                      ...body,
                      lastName: val,
                    })
                  }
                />
              </View>

              <View style={styles.marginTop}>
                <CustomTextInput
                  backgroundColor={colors.white}
                  inputHeight={height * 0.07}
                  inputWidth={width * 0.86}
                  value={body.address}
                  placeholder="Address"
                  keyboardType="default"
                  textColor="black"
                  borderRadius={50}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  onChangeText={val =>
                    setBody({
                      ...body,
                      address: val,
                    })
                  }
                />
              </View>

              <View style={styles.marginVertical}>
                <CustomPhoneInput1
                  placeholder="Enter phone number"
                  inputWidth={0.85}
                  inputHeight={height * 0.07}
                  value={body.phone}
                  onChangeText={(text: string) =>
                    setBody({
                      ...body,
                      phone: text.replace(/[^0-9]/g, ''),
                    })
                  }
                  borderRadius={50}
                />
              </View>

              <View style={styles.marginBottom}>
                <CustomTextInput1
                  isDisable={true}
                  value={user?.email}
                  backgroundColor={colors.white}
                  placeholder="john.smith@domain.com"
                  inputWidth={width * 0.85}
                  inputHeight={height * 0.07}
                  keyboardType="email-address"
                />
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>

        {/* Bottom Fixed Button */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.gradient1, colors.gradient2]}
          style={styles.gradientMain}>
          <CustomButton
            text="Next"
            fontSize={fontSizes.lg}
            color={colors.red}
            textColor={colors.white}
            btnHeight={height * 0.08}
            btnWidth={width * 0.85}
            borderRadius={50}
            onPress={handleSubmit}
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

export default FirstProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 16,
    paddingBottom: 120, // extra space for bottom button
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    gap: 10,
  },
  rowInputContainer1: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginBottom: 80,
  },
  gradientMain: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08,
    width: width * 0.85,
    borderRadius: 50,
  },
});

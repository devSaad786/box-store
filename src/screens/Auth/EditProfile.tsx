import React, {useState} from 'react';
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
  Image,
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
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {apiHelper, ASSET_URL} from '../../service';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import { setUser } from '../../redux/slices/roleSlice';

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const SecondProfile = () => {
  const navigation = useNavigation<any>();
  const [modalOpen, setModalOpen] = useState(false);
  const {user} = useSelector<RootState>(val => val.role);
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    image: user?.profilePicture,
    firstName: user?.firstName,
    lastName: user?.lastName,
    address: user?.address,
    phone: user?.phone,
  });
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
    console.log('Response: ', response?.data?.data);

    if (response?.data) {
      dispatch(setUser(response?.data?.data));
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      navigation.navigate('MyProfile')
    }
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
      });
    }
  };
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="Edit Profile"
        onBackPress={() => navigation.goBack()}
      />

      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.imageContainer}>
              <ImageBackground
                source={
                  user?.profilePicture
                    ? {uri: ASSET_URL + user?.profilePicture}
                    : images.john
                }
                style={styles.profileImage}
                imageStyle={{borderRadius: 100}}>
                <Pressable style={styles.cameraButton} onPress={toggleModal}>
                  <Image source={images.camera3} style={styles.cameraIcon} />
                </Pressable>
              </ImageBackground>
            </View>

            <View style={styles.rowInputContainer}>
              <CustomTextInput
                backgroundColor={colors.white}
                inputHeight={height * 0.07}
                inputWidth={width * 0.4}
                placeholder="John"
                value={body?.firstName}
                onChangeText={val =>
                  setBody({
                    ...body,
                    firstName: val,
                  })
                }
                keyboardType="default"
                textColor="black"
                borderRadius={50}
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
              <CustomTextInput
                backgroundColor={colors.white}
                inputHeight={height * 0.07}
                inputWidth={width * 0.4}
                value={body?.lastName}
                onChangeText={val =>
                  setBody({
                    ...body,
                    lastName: val,
                  })
                }
                placeholder="Smith"
                keyboardType="default"
                textColor="black"
                borderRadius={50}
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
            </View>

            <View style={styles.Container}>
              <CustomTextInput
                backgroundColor={colors.white}
                inputHeight={height * 0.07}
                inputWidth={width * 0.86}
                value={body?.address}
                placeholder="698 Cantebury Drive"
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

            <View style={styles.texti}>
              <CustomPhoneInput1
                placeholder="Enter phone number"
                inputWidth={0.85}
                inputHeight={height * 0.07}
                value={body?.phone}
                onChangeText={(text: string) =>
                  setBody({
                    ...body,
                    phone: text.replace(/[^0-9]/g, ''),
                  })
                }
                borderRadius={50}
              />
            </View>

            <View style={styles.Container3}>
              <CustomTextInput1
                isDisable={true}
                backgroundColor={colors.white}
                placeholder="john.smith@domain.com"
                inputWidth={width * 0.85}
                inputHeight={height * 0.07}
                keyboardType="email-address"
                // onChangeText={setEmail}
                value={user?.email}
              />
            </View>

            <CustomImageUploadModal
              modalOpen={modalOpen}
              toggleModal={toggleModal}
              gallery={handleGalleryUpload}
              camera={handleCameraUpload}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}>
        <CustomButton
          text="Continue"
          fontSize={fontSizes.lg}
          color={colors.red}
          btnHeight={height * 0.08}
          btnWidth={width * 0.85}
          textColor={colors.white}
          borderRadius={50}
          onPress={handleSubmit}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SecondProfile;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.red,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 20,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  rowInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    gap: 10,
  },
  Container: {
    marginTop: 20,
  },
  rowInputContainer1: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    gap: 10,
  },
  texti: {
    marginBottom: 9,
  },
  Container3: {
    marginBottom: 30,
  },
  gradientMain: {
    alignSelf: 'center',
  },
});

import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import images from "../../assets/images";
import { width } from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ASSET_URL } from "../../service";
 

const MyProfile = () => {
  const navigation = useNavigation<any>()
  const {user} = useSelector<RootState>(val=>val.role)
  console.log(user);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader isback={true} title="My Profile" ispen={true}   onBackPress={() => navigation.navigate('Profile')} onpenPress={() => navigation.navigate("EditProfile")} />

      {/* Static: Image and Name */}
      <View style={styles.topSection}>
        <ImageBackground
          source={user?.profilePicture?{uri:ASSET_URL+user?.profilePicture}:images?.john}
          style={styles.profileImage}
          imageStyle={{ borderRadius: 100 }}
        />
        <Text style={styles.nameText}>{`${user?.firstName} ${user?.lastName}`}</Text>
      </View>

      {/* Scrollable Details */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text2}>{user?.email}</Text>
        </View>
        <View style={styles.halfLine} />

        <View style={styles.row}>
          <Text style={styles.text}>Phone Number</Text>
          <Text style={styles.text2}>{user?.phone}</Text>
        </View>
        <View style={styles.halfLine} />

        <View style={styles.row}>
          <Text style={styles.text}>Address</Text>
          <Text style={styles.text2}>{user?.address.length > 20? `${user?.address.substring(0,30)}...`: user?.address }</Text>
        </View>
        <View style={styles.halfLine} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
   
  },
  topSection: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
  },
  nameText: {
    marginTop: 12,
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.red,
    fontWeight: "700",
  },
  scrollContainer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingVertical: 16,
    width: "100%",
  },
  text: {
    flex: 1,
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansMedium,
    fontWeight: "400",
  },
  text2: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansMedium,
    fontWeight: "400",
  },
  halfLine: {
    height: 1,
    width: "90%",
    backgroundColor: colors.gray,
    alignSelf: "center",
  },
  sectionHeader: {
    width: "90%",
    paddingTop: 10,
    paddingBottom: 8,
    alignSelf: "flex-start",
  },
  sectionHeaderText: {
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    marginLeft: 20,
    fontWeight: "700",
  },
  map: {
    width: '90%',
    height: 200,
    borderRadius: 12,
    marginVertical: 10,
  },
});

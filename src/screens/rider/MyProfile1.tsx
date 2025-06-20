import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackHeader1 from '../../components/BackHeader1';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utilities/colors';
import { fontSizes } from '../../utilities/fontSizes';
import { fontFamily } from '../../assets/fonts';
import { width, height } from '../../utilities';
import images from '../../assets/images';
import BackHeader from '../../components/BackHeader';

const MyProfile1 = () => {
  const navigation = useNavigation<any>();

  const handleViewDetails = () => {
    navigation.navigate('History');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="My Profile" isNotification={true}  onNotificationPress={() => navigation.navigate("Notifications")} onBackPress={() => navigation.goBack()}/>

      {/* Total Earnings Card */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.titleText}>Total Earnings</Text>
          <TouchableOpacity onPress={handleViewDetails}>
            <Text style={styles.viewText}>View Details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.amount}>$1,236.00</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.card1}>
        <View style={styles.profileRow}>
          <Image source={images.john} style={styles.john} />
          <Text style={styles.name}>William Roy</Text>
          <TouchableOpacity style={styles.iconContainer}  onPress={() => navigation.navigate('EditProfile1')}>
            <Ionicons name="pencil-outline" size={25} color={colors.red} />
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.labelBold}>Rider</Text>
          <Text style={styles.label}>william.roy@domain.com</Text>
          <Text style={styles.label}>+1 234 5678 90</Text>
          <Text style={styles.label}>698 Cantebury Drive</Text>
          <Text style={styles.label}>New York, 10011, NY, US</Text>
        </View>
      </View>
      <View style={styles.card3}>
        <View style={styles.row2}>
      <Text style={styles.name1}>Driving License</Text>

          <TouchableOpacity style={styles.iconContainer1} onPress={() => navigation.navigate('EditLicense')}>
            <Ionicons name="pencil-outline" size={25} color={colors.red} />
          </TouchableOpacity>
          </View>
          <View style={styles.row3}>
          <Image source={images.license1} style={styles.license} />
          <Image source={images.license2} style={styles.license} />
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: width * 0.88,
    marginTop: 25,
    alignSelf: 'center',
    height: height * 0.1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    fontWeight: '500',
  },
  viewText: {
    fontSize: fontSizes.sm2,
    color: colors.red,
    fontFamily: fontFamily.OpenSansRegular,
    textDecorationLine: 'underline',
  },
  amount: {
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight: '700',
    marginTop: 12,
  },
  card1: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: width * 0.88,
    height:height*0.23,
    marginTop: 25,
    alignSelf: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  john: {
    width: width * 0.20,
    height: height * 0.092,
    borderRadius: 25,
    marginRight: 12,
    
  },
  name: {
    flex: 1,
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: '600',
    marginBottom:40
  },
  iconContainer: {
    marginBottom:40
  },
  infoSection: {
    marginTop: 12,
    marginLeft: width * 0.23, // aligns with text start after image
    bottom:55
  },
  label: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    marginBottom: 6,
    lineHeight: 20,
  },
  labelBold: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight:500,
    marginBottom: 6,
    lineHeight: 20,
  },
  card2: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: width * 0.88,
    height:height*0.23,
    marginTop: 25,
    alignSelf: 'center',
  },
  row2:{
    flexDirection:"row",
  },
  name1: {
    flex: 1,
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: '700',
  },
  iconContainer1: {
  
  },
  card3: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: width * 0.88,
    height:height*0.20,
    alignSelf: 'center',
    marginTop: 25,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
    // marginRight:60
  },
  license: {
    width: width * 0.48, // slightly smaller to fit side-by-side
    height: height * 0.12,
 right:20,
    marginRight: -25, // Add only to the first image, or use gap above
  },
   
  
});

export default MyProfile1;

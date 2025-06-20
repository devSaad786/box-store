import React,{useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import BackHeader1 from '../../components/BackHeader1';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utilities/colors';
import { fontSizes } from '../../utilities/fontSizes';
import { width, height } from '../../utilities';
import { fontFamily } from '../../assets/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';



const incomigjob = [
  {
    product: 'Product Name 001...',
    order: 'Order# 236589',
    detail: 'View Details',
    button: 'Accept',
    button1: 'Decline',
  },
  {
    product: 'Product Name 001...',
    order: 'Order# 236590',
    detail: 'View Details',
    button: 'Accept',
    button1: 'Decline',
  },
];

const Recentjob = [
  {
    product: 'Product Name 001...',
    order: 'Order# 236590',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    product: 'Product Name 001...',
    order: 'Order# 236590',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    product: 'Product Name 001...',
    order: 'Order# 236590',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    product: 'Product Name 001...',
    order: 'Order# 236590',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    product: 'Product Name 001...',
    order: 'Order# 236590',
    complete: 'Completed',
    detail: 'View Details',
  },
];

const Home1 = () => {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleNotificationPress = () => navigation.navigate('Notifications');
  const handleChatPress = () => navigation.navigate('Chat');
  const handleRecentJobPress = (item: any) => {
    console.log('Recent Job Pressed:', item.order);
    navigation.navigate('JobDetail', { orderId: item.order });
  };
  const handleDetailsPress = (item: any) => {
    console.log('View Details:', item.order);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader1
        isjohn
        title="Home"
        isChat
        isNotification
        onNotificationPress={handleNotificationPress}
        onChatPress={handleChatPress}
        onJohnPress={() => navigation.navigate('Profile')} 
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>Hello</Text>
            <Text style={styles.text1}>Tuesday</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text3}>William Roy</Text>
            <Text style={styles.text4}>July 11, 2023</Text>
          </View>
        </View>

        <View style={styles.divider} />
        <Text style={styles.heading}>Incoming Job Requests</Text>

        {incomigjob.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.product}>{item.product}</Text>
              <Text style={styles.order}>{item.order}</Text>
              <TouchableOpacity onPress={() => handleDetailsPress(item)}>
                <Text style={styles.detail}>{item.detail}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRight}>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.acceptBtn}>
                  <Text style={styles.btnText}>{item.button}</Text>
                </TouchableOpacity>
                <TouchableOpacity
  style={styles.declineBtn}
  onPress={() => setModalVisible(true)} // <-- Open modal on press
>
  <Text style={styles.btnText}>{item.button1}</Text>
</TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <Text style={styles.heading}>Recent Job</Text>
        {Recentjob.map((item, index) => (
          <TouchableOpacity
            key={`recent-${index}`}
            style={[styles.card1, styles.recentCard]}
            activeOpacity={0.1}
            onPress={() => handleRecentJobPress(item)}
          >
            <View style={styles.row}>
              <Text style={styles.product}>{item.product}</Text>
              <View style={styles.completedWrapper}>
                <View style={styles.completedIconContainer}>
                  <MaterialIcons name="check" size={18} color={colors.white} />
                </View>
                <Text style={styles.completedText}>{item.complete}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.order}>{item.order}</Text>
              <Text style={styles.detail1}>{item.detail}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CustomModal
  visible={isModalVisible}
  message="Are you sure you want to decline the request?"
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
            navigation.navigate("Home");
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
            navigation.navigate("Home");
          }}
        />
      </LinearGradient>
    </View>
  }
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  content: {
    paddingHorizontal: width * 0.07,
    paddingTop: height * 0.03,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.011,
  },
  text: {
    fontSize: fontSizes.lg,
    fontWeight: '700',
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
  },
  text1: {
    fontSize: fontSizes.sm2,
    color: colors.black,
    fontWeight: '400',
    fontFamily: fontFamily.OpenSansRegular,
  },
  text3: {
    fontSize: fontSizes.lg2,
    fontWeight: '700',
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
  },
  text4: {
    fontSize: fontSizes.sm2,
    color: colors.black,
    fontWeight: '400',
    fontFamily: fontFamily.OpenSansRegular,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: height * 0.010,
    width: width * 0.84,
    alignSelf: 'center',
  },
  heading: {
    fontSize: fontSizes.lg,
    fontWeight: '400',
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    paddingHorizontal: width * 0.07,
 marginTop: height * 0.015,
     marginBottom: height * 0.01,
     bottom:14
  },
  card: {
    flexDirection: 'row',
   alignSelf:'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width:width*0.86,
  elevation:2
  },
  recentCard: {
    flexDirection: 'column',
    marginTop:5
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: width * 0.04,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  product: {
    fontSize: fontSizes.sm,
    fontWeight: '600',
    color: colors.black,
    fontFamily: fontFamily.OpenSansLight,
    marginBottom: 8,
  },
  order: {
    fontSize: fontSizes.sm,
    color: colors.black,
    marginTop: 2,
    marginBottom: 8,
    fontFamily: fontFamily.OpenSansRegular,
  },
  detail: {
    fontSize: fontSizes.sm,
    color: colors.red,
    textDecorationLine: 'underline',
    fontFamily: fontFamily.OpenSansRegular,
  },
  acceptBtn: {
    backgroundColor: colors.blue,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  declineBtn: {
    backgroundColor: colors.red,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  btnText: {
    color: colors.white,
    fontSize: fontSizes.sm,
    fontWeight: '600',
    fontFamily: fontFamily.OpenSansSemiBold,
  },
  completedText: {
    color: colors.black,
    fontSize: fontSizes.sm,
    fontWeight: '400',
    marginLeft: 6,
    fontFamily: fontFamily.OpenSansLight,
    marginBottom:5
  },
  completedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  completedIconContainer: {
    backgroundColor: colors.red,
    borderRadius: 20,
    // padding: 1,
    marginBottom:5
  },
  card1: {
    flexDirection: 'row',
   alignSelf:'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width:width*0.86,
    height:height*0.10,
    elevation:2
  },
  detail1: {
    fontSize: fontSizes.sm,
    color: colors.black,
   
    fontFamily: fontFamily.OpenSansRegular,
  },
  gradientMain: {
    borderRadius: 50,
    overflow: 'hidden',   // VERY IMPORTANT! ensures radius clips the gradient edges
    justifyContent: 'center',
    alignItems: 'center',
  }
    
});

export default Home1;

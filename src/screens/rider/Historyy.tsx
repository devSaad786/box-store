import React, { useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import BackHeader1 from '../../components/BackHeader1';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utilities/colors';
import { fontSizes } from '../../utilities/fontSizes';
import { width, height } from '../../utilities';
import { fontFamily } from '../../assets/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchInput from '../../components/CustomSearchInput';
import images from '../../assets/images';
import ActionSheet from "react-native-actions-sheet";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Ionicons from "react-native-vector-icons/Ionicons"; // No Expo

const history = [
  {
    id: '1',
    product: 'Product Name 001...',
    order: 'Order# 236590',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '2',
    product: 'Product Name 002...',
    order: 'Order# 236591',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '4',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '5',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '6',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '7',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '8',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '9',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '10',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '11',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
  {
    id: '12',
    product: 'Product Name 003...',
    order: 'Order# 236592',
    complete: 'Completed',
    detail: 'View Details',
  },
];

const Historyy = () => {
    const [query, setQuery] = useState('');
    const navigation = useNavigation<any>();
      const actionSheetRef = useRef(null);
  
    const handleNotificationPress = () => navigation.navigate('Notifications');
  
    const handleRecentJobPress = (item: any) => {
      navigation.navigate('JobDetail1', { item });
    };
  
    const renderItem = ({ item }: { item: any }) => (
      <TouchableOpacity
        style={styles.card1}
        activeOpacity={0.8}
        onPress={() => handleRecentJobPress(item)}
      >
        <View style={styles.row}>
          <Text style={styles.product}>{item.product}</Text>
          <View style={styles.completedWrapper}>
            <View style={styles.completedIconContainer}>
              <MaterialIcons name="check" size={14} color={colors.white} />
            </View>
            <Text style={styles.completedText}>{item.complete}</Text>
          </View>
        </View>
  
        <View style={styles.row}>
          <Text style={styles.order}>{item.order}</Text>
          <Text style={styles.detail1}>{item.detail}</Text>
        </View>
      </TouchableOpacity>
    );
  
    const filteredData = history.filter(item =>
      item.product.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <BackHeader1
          isjohn
          title="History"
          isNotification
          onNotificationPress={handleNotificationPress}
          onJohnPress={() => navigation.navigate('Profile')}
        />
  
        <View style={styles.searchWrapper}>
        <SearchInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search Here..."
          divider={true}
          image={images.settingfilter}
          onImagePress={() => actionSheetRef.current?.show()}
        />
        </View>
  
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 15 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No results found.</Text>
          }
        />
         <ActionSheet
    ref={actionSheetRef}
    containerStyle={styles.actionSheetMain}
    isModal={true}
    overlayColor="rgba(0,0,0,0.5)"
  >
    <View style={styles.sheetContent}>
      <View style={styles.sheetHeader}>
        <Text style={styles.sheetTitle}>Filter</Text>
        <TouchableOpacity
          onPress={() => actionSheetRef.current?.hide()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>

      <CustomTextInput
        backgroundColor={colors.gray}
        inputHeight={height * 0.06}
        inputWidth={width * 0.9}
        placeholder="Search By Data"
        keyboardType="numeric"
        textColor="black"
        borderRadius={50}
        placeholderTextColor="rgba(0,0,0,0.5)"
      />
       <TouchableOpacity style={styles.calendarIconTouchable}>
                <Image
                  source={images.calender}
                  style={styles.calendarIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
      <CustomTextInput
        backgroundColor={colors.gray}
        inputHeight={height * 0.06}
        inputWidth={width * 0.9}
        placeholder="Search By Order"
        keyboardType="default"
        textColor="black"
        borderRadius={50}
        placeholderTextColor="rgba(0,0,0,0.5)"
      />
    </View>
    <View style={{ marginTop: 5, alignItems: 'center' }}>
            <CustomButton
              text="Apply"
              fontSize={fontSizes.md}
              btnHeight={height * 0.06}
              btnWidth={width * 0.9}
              textColor={colors.white}
              color={colors.red}
              borderRadius={50}
              onPress={() => {
                console.log("Add Apply logic");
                actionSheetRef.current?.hide();
              }}
            />
          </View>
  </ActionSheet>
</SafeAreaView>
   
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    searchWrapper: {
      marginTop: 20,
      paddingHorizontal: 15,
    },
    card1: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.04,
      marginBottom: height * 0.015,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      width: width * 0.86,
      alignSelf: 'center',
      elevation:2
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: height * 0.008,
    },
    product: {
      fontSize: fontSizes.sm,
      fontWeight: '600',
      color: colors.black,
      fontFamily: fontFamily.OpenSansLight,
    },
    completedWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    completedIconContainer: {
      backgroundColor: colors.red,
      borderRadius: 20,
      height: 20,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    completedText: {
      color: colors.black,
      fontSize: fontSizes.sm,
      marginLeft: 6,
      fontFamily: fontFamily.OpenSansLight,
    },
    order: {
      fontSize: fontSizes.sm,
      color: colors.black,
      fontFamily: fontFamily.OpenSansRegular,
    },
    detail1: {
      fontSize: fontSizes.sm,
      color: colors.black,
      fontFamily: fontFamily.OpenSansRegular,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 30,
      fontSize: fontSizes.md,
      color: colors.gray,
    },
    sheetContent: {
      padding: 20,
      gap: 20,
      alignItems: "center",
    },
    sheetHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    sheetTitle: {
      fontSize: fontSizes.lg,
      fontFamily: fontFamily.OpenSansBold,
      color: colors.black,
      fontWeight: "600",
    },
    closeButton: {
      position: "absolute",
    left: 180,
    bottom:15
    },
    actionSheetMain: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingBottom: 20,
      paddingTop: 10,
    },
    rowInputs: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: width * 0.9,
      marginTop: 1,
    },
    expiryInputWrapper: {
      position: "relative",
      width: width * 0.4,
      justifyContent: "center",
    },
    calendarIconTouchable: {
      position: "absolute",
      right: 40,
      height: "100%",
      justifyContent: "center",
    },
    calendarIcon: {
      width: 20,
      height: 20,
      tintColor: colors.red,
    },
  });
  
  export default Historyy;
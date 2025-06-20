import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import BackHeader from "../../components/BackHeader";
import CustomTextInput from "../../components/CustomTextInput";
import images from "../../assets/images";
import { width, height } from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import ActionSheet from "react-native-actions-sheet";
import { useNavigation } from "@react-navigation/native";

const SelectPayment = () => {
  const navigation = useNavigation()
  const actionSheetRef = useRef(null);
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Apple Pay", image: images.applePay },
    { id: 2, name: "Google Pay", image: images.googlePay },
    { id: 3, name: "Pay Pal", image: images.paypal },
    { id: 4, name: "*** **** *** 4863", image: images.bankPay },
    { id: 5, name: "*** **** *** 4863", image: images.visa },
  ]);
  const [selectedPaymentId, setSelectedPaymentId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setAccounts(accounts.filter((account) => account.id !== id));
    if (selectedPaymentId === id) {
      setSelectedPaymentId(null);
    }
  };

  const renderRightActions = (id: number) => (
    <View style={styles.deleteContainer}>
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <Image
          source={images.trash}
          style={styles.trash}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );

  const renderForm = () => (
    <View style={styles.formContainer}>
      <TouchableOpacity
        style={styles.addAddressBtn}
        activeOpacity={0.7}
        onPress={() => actionSheetRef.current?.show()}
      >
        <View style={styles.plusCircle}>
          <Ionicons name="add" size={24} color={colors.white} />
        </View>
        <Text style={styles.addAddressText}>Add New Card</Text>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.actionSheetMain}
        isModal={true}
        overlayColor="rgba(0,0,0,0.5)"
      >
        <View style={styles.sheetContent}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Add New Card</Text>
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
            placeholder="Card Holder Name"
            keyboardType="default"
            textColor="black"
            borderRadius={50}
            placeholderTextColor="rgba(0,0,0,0.5)"
          />
          <CustomTextInput
            backgroundColor={colors.gray}
            inputHeight={height * 0.06}
            inputWidth={width * 0.9}
            placeholder="Card Number"
            keyboardType="numeric"
            textColor="black"
            borderRadius={50}
            placeholderTextColor="rgba(0,0,0,0.5)"
          />

          {/* Row for Expiry and CVC */}
          <View style={styles.rowInputs}>
            {/* Expiry input with calendar icon inside */}
            <View style={styles.expiryInputWrapper}>
              <CustomTextInput
                backgroundColor={colors.gray}
                inputHeight={height * 0.06}
                inputWidth={width * 0.4}
                placeholder="Expiry"
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
            </View>

            {/* CVC input */}
            <View style={styles.cvcContainer}>
              <CustomTextInput
                backgroundColor={colors.gray}
                inputHeight={height * 0.06}
                inputWidth={width * 0.4}
                placeholder="CVC"
                keyboardType="numeric"
                textColor="black"
                borderRadius={50}
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
            </View>
          </View>
        </View>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Add Card"
          fontSize={fontSizes.lg2}
          btnHeight={height * 0.07}
          btnWidth={width * 0.89}
          textColor={colors.white}
          color={colors.red}
          borderRadius={50}
          onPress={() => actionSheetRef.current?.hide()}
        />
      </LinearGradient>
      </ActionSheet>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="Select Payment"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardsWrapper}>
          {accounts.map((account) => (
            <Swipeable
              key={account.id}
              renderRightActions={() => renderRightActions(account.id)}
            >
              <View style={styles.cardContainer}>
                <Image source={account.image} style={styles.image} />
                <Text style={styles.cardText}>{account.name}</Text>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => setSelectedPaymentId(account.id)}
                >
                  {selectedPaymentId === account.id && (
                    <View style={styles.selectedDot} />
                  )}
                </TouchableOpacity>
              </View>
            </Swipeable>
          ))}
        </View>
        {renderForm()}
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.gradient1, colors.gradient2]}
        style={styles.gradientMain}
      >
        <CustomButton
          text="Pay Now"
          fontSize={fontSizes.lg2}
          btnHeight={height * 0.07}
          btnWidth={width * 0.89}
          textColor={colors.white}
          color={colors.red}
          borderRadius={50}
          onPress={() => navigation.navigate("ThankYou")}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  cardsWrapper: {
    marginTop: 30,
    gap: 15,
    width: width * 0.9,
    alignSelf: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },
  cardText: {
    fontSize: fontSizes.md,
    color: colors.black,
    fontFamily: fontFamily.OpenSansSemiBold,
    flex: 1,
  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    borderRadius: 10,
    marginVertical: 10,
  },
  trash: {
    width: 25,
    height: 25,
    tintColor: colors.red,
  },
  formContainer: {
    alignItems: "center",
    marginTop: 30,
    gap: height * 0.025,
  },
  addAddressBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  plusCircle: {
    marginRight: 10,
    backgroundColor: colors.red,
    borderRadius: 10,
    padding: 2,
  },
  addAddressText: {
    color: colors.red,
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansSemiBold,
    textDecorationLine: "underline",
    fontWeight: "700",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.red,
  },
  gradientMain: {
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 50,
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
    color: colors.red,
    fontWeight: "600",
  },
  closeButton: {
    position: "absolute",
  left: 210,
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
    right: 15,
    height: "100%",
    justifyContent: "center",
  },
  calendarIcon: {
    width: 20,
    height: 20,
    tintColor: colors.red,
  },
  cvcContainer: {
    borderRadius: 50,
    width: width * 0.4,
    justifyContent: "center",
    paddingHorizontal:1,
  },
});

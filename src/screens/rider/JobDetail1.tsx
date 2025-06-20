import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BackHeader from "../../components/BackHeader";
import { useNavigation } from "@react-navigation/native";
import { width, height } from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";

const JobDetail1 = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="Job Details"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Delivery Detail</Text>
        </View>

        <View style={styles.card}>
          {/* Status */}
          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>Pending</Text>
          </View>
          <View style={styles.divider} />

          {/* Delivery On */}
          <View style={styles.row}>
            <Text style={styles.label}>Delivery On</Text>
            <Text style={styles.value}>Today</Text>
          </View>
          <View style={styles.divider} />

          {/* Drop Off Address */}
          <View style={styles.addressRow}>
            <Text style={styles.addressLabel}>Drop Off Address</Text>
            <Text style={styles.addressValue}>
              ABC Mart, 698 Cartebury Drive
            </Text>
          </View>
          <View style={styles.divider} />

          {/* Full Address with View Map */}
          <View style={styles.addressRow}>
            <Text style={styles.label1}>Address</Text>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.addressValueRight}>
                698 Cartebury Drive, New York,NY,US
              </Text>
              <TouchableOpacity
                style={styles.viewMapRow}
                onPress={() => navigation.navigate("DropOffLocation")}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name="location-on"
                  size={18}
                  color={colors.red}
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.viewMapText}>View Map</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider} />

          {/* Received Person */}
          <View style={styles.row}>
            <Text style={styles.label}>Recevied Person</Text>
            <Text style={styles.value}>John Smith</Text>
          </View>
          <View style={styles.divider} />

          {/* Contact Number */}
          <View style={styles.row}>
            <Text style={styles.label}>Contact Number</Text>
            <Text style={styles.value}>+1 234 5678 90</Text>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <Text style={styles.headerText1}>Order Details</Text>
        </View>
        <View style={styles.card}>
          {/* Status */}
          <View style={styles.row}>
            <Text style={styles.label}>Product Name 01</Text>
            <Text style={styles.value}>1x</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Product Name 02</Text>
            <Text style={styles.value}>2x</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Product Name 03</Text>
            <Text style={styles.value}>1x</Text>
          </View>
          </View>
          <View style={styles.headerContainer2}>
          <Text style={styles.headerText1}>Delivery Fare</Text>
          
          </View>
          <View style={styles.CARD1}>
            <View style={styles.row11}>
            <Text style={styles.FARE}>Delivery Amount</Text>
            <Text style={styles.amount}>$6.00</Text>
            </View>

          </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.04,
    paddingBottom: height * 0.015,
  },
  headerText: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.blue,
    fontWeight: "600",
  },
  card: {
    width: width * 0.9,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: height * 0.01,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.02,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.012,
  },
  label: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  label1: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    top: 15,
  },
  value: {
    flex: 1,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.black,
    textAlign: "right",
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    width: "100%",
    marginVertical: height * 0.005,
  },
  addressRow: {
    flexDirection: "row",
    paddingVertical: height * 0.012,
    justifyContent: "space-between",
  },
  addressLabel: {
    flex: 0.4,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    top: 11,
  },
  addressValue: {
    flex: 0.55,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    lineHeight: 20,
    textAlign: "right",
  },
  addressContainer: {
    paddingVertical: height * 0.012,
  },
  fullAddress: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    marginTop: 4,
    lineHeight: 20,
  },
  viewMapRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  viewMapText: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.red,
    textDecorationLine: "underline",
  },
  addressValueRight: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansLight,
    color: colors.black,
    lineHeight: 20,
    textAlign: "right",
  },
  headerContainer2: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.015,
  },
 
    headerText1: {
        fontSize: fontSizes.lg,
        fontFamily: fontFamily.OpenSansSemiBold,
        color: colors.blue,
        fontWeight: "600",
      },
      CARD1: {
        width: width * 0.88,
        height:height*0.07,
        alignSelf: "center",
        backgroundColor: colors.white,
        borderRadius: 40,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        marginBottom: height * 0.02,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      
      row11: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        top:9
      },
      
      FARE: {
        fontSize: fontSizes.sm2,
        fontFamily: fontFamily.OpenSansRegular,
        color: colors.black,
      },
      
      amount: {
        fontSize: fontSizes.sm2,
        fontFamily: fontFamily.OpenSansBold,
        color: colors.black, // or `colors.black` depending on your theme
      },
        gradientMain: {
            position: 'absolute',
            bottom: 25,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: height * 0.08,
            width: width * 0.85,
            borderRadius: 50,
          
      
      },
      
});

export default JobDetail1;

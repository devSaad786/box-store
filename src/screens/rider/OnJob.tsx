import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { width, height } from "../../utilities";
import { colors } from "../../utilities/colors";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";

const OnJob = () => {
  const navigation = useNavigation<any>();

  const startCoord = { latitude: 40.7128, longitude: -74.0060 };
  const endCoord = { latitude: 40.7170, longitude: -74.0050 };

  // Offset the polyline start slightly so it doesn't touch the drop off marker
  const polylineCoords = [
    { latitude: endCoord.latitude - 0.0004, longitude: endCoord.longitude }, // Slightly above drop off marker
    { latitude: endCoord.latitude - 0.0018, longitude: endCoord.longitude },
    { latitude: endCoord.latitude - 0.002, longitude: endCoord.longitude - 0.004 },
    startCoord,
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="On Job"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mapWrapper}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: (startCoord.latitude + endCoord.latitude) / 2,
              longitude: (startCoord.longitude + endCoord.longitude) / 2 - 0.002,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            loadingEnabled={true}
          >
            <Marker coordinate={startCoord}>
              <View style={styles.endCircle} />
            </Marker>

            <Marker coordinate={endCoord}>
              <View style={styles.markerContainer}>
                <Text style={styles.markerLabel}>Drop Off Location</Text>
                <Ionicons name="location-sharp" size={32} color={colors.red} />
              </View>
            </Marker>

            <Polyline
              coordinates={polylineCoords}
              strokeColor={colors.red}
              strokeWidth={3}
            />
          </MapView>

          <View style={styles.crosshairContainer}>
            <FontAwesome6 name="location-crosshairs" size={22} color={colors.red} />
          </View>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.row}>
            <Text style={styles.label}>Delivery Address</Text>
            <Text style={styles.value}>
              698 Cartebury Drive, New York, 10011, NY, United States
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Distance Compeleted</Text>
            <Text style={styles.value}>4.1 Miles</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Total Time</Text>
            <Text style={styles.value}>18 min</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Fare</Text>
            <Text style={styles.value}>$6.00</Text>
          </View>
          <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.gradient1, colors.gradient2]}
              style={styles.gradientMain}
            >
              <CustomButton
                text="Mark as Compeleted"
                fontSize={fontSizes.lg}
                color={colors.red}
                btnHeight={height * 0.08}
                btnWidth={width * 0.85}
                textColor={colors.white}
                borderRadius={50}
                onPress={() => navigation.navigate("ThankYou2")} 
              />
            </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnJob;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  mapWrapper: {
    marginTop: 29,
    alignSelf: "center",
    width: width * 0.85,
    height: height * 0.6,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  endCircle: {
    width: 17,
    height: 17,
    backgroundColor: colors.red,
    borderRadius: 8.5,
    borderWidth: 2,
    borderColor: colors.white,
  },
  crosshairContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 10,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  infoSection: {
    paddingHorizontal: width * 0.075,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.012,
  },
  label: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  value: {
    flex: 1,
    fontSize: fontSizes.sm,
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
  markerLabel: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.red,
    marginBottom: 4,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: "hidden",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    textAlign: "center",
    maxWidth: 140,
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 60,
  },
  gradientMain: {
    
    top: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08,
    width: width * 0.85,
    borderRadius: 50,
  
}
});

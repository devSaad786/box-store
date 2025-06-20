import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { width,height} from "../../utilities";
import { colors } from "../../utilities/colors";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
const RatingsAndReviews = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const navigation = useNavigation<any>();

  const [message, setMessage] = useState("");
  const ratings = {
    5: 30,
    4: 9,
    3: 6,
    2: 3,
    1: 1,
  };

  const ratingCounts = {
    5: 356,
    4: 256,
    3: 150,
    2: 120,
    1: 100,
  };

  const maxRatingValue = Math.max(...Object.values(ratings));

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader isBack={true} title="Rate & Reviews"  onBackPress={() => navigation.goBack()}/>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Rating Summary */}
        <View style={styles.card}>
          <Text style={styles.title}>Average Customer Rating</Text>
          <View style={styles.breakdownContainer}>
            {[5, 4, 3, 2, 1].map((star) => {
              const percentage =
                star === 5
                  ? 50
                  : (ratings[star] / maxRatingValue) * 150;
              return (
                <View key={star} style={styles.breakdownRow}>
                  <Text style={styles.starIcon}>★</Text>
                  <Text style={styles.starLabel}>{star}</Text>
                  <View style={styles.lineBarWrapper}>
                    <View
                      style={[styles.filledBar, { width: `${percentage}%` }]}
                    />
                  </View>
                  <Text style={styles.ratingCount}>{ratingCounts[star]}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Rate Now */}
        <View style={styles.card1}>
          <Text style={styles.title1}>Rate Now</Text>
          <View style={styles.starRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setSelectedRating(star)}
              >
                <Text
                  style={[
                    styles.starRate,
                    {
                      color: star <= selectedRating ? colors.red : colors.gray,
                    },
                  ]}
                >
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Text style={styles.title2}>Your Review</Text>
       
                   <TextInput
                     style={styles.messageInput}
                     placeholder="Write your review here..."
                     placeholderTextColor={colors.black}
                     value={message}
                     onChangeText={setMessage}
                     multiline
                   />
      </ScrollView>
      <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.gradient1, colors.gradient2]}
              style={styles.gradientMain}
            >
              <CustomButton
                text="Submit"
                fontSize={fontSizes.lg}
                color={colors.red}
                btnHeight={height * 0.08}
                btnWidth={width * 0.85}
                textColor={colors.white}
                borderRadius={50}
                onPress={() => {}}
              />
            </LinearGradient>
    </SafeAreaView>
  );
};

export default RatingsAndReviews;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.white,
    width: width * 0.9,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    marginBottom: 30,
  },
  title: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight: "500",
    marginBottom: 10,
  },
  breakdownContainer: {
    width: width * 0.85,
  },
  breakdownRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  starIcon: {
    position: "absolute",
    color: colors.red,
    fontSize: 18,
    marginLeft: 14,
  },
  starLabel: {
    width: 20,
    fontSize: 14,
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
    marginRight: 14,
  },
  lineBarWrapper: {
    flex: 1,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.black,
    overflow: "hidden",
  },
  filledBar: {
    height: "100%",
    backgroundColor: colors.red,
  },
  ratingCount: {
    width: 50,
    textAlign: "right",
    fontSize: 14,
    color: colors.black,
    fontFamily: fontFamily.OpenSansSemiBold,
    marginLeft: -5,
  },
  starRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  starRate: {
    fontSize: 40,
    marginHorizontal: 4,
    borderColor:colors.red
  },
  card1: {
    backgroundColor: colors.white,
    width: width * 0.9,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    marginBottom: 30,
  },
  title1: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight: "600",
    marginBottom: 1,
  },
  title2: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight: "700",
    marginBottom: 1,
  },
  messageInput: {
    height:height*0.2,
     width: width * 0.85,
     backgroundColor: colors.white,
     borderRadius: 20,
     paddingHorizontal: 20,
     paddingTop: 15,
     fontSize: 16,
     fontFamily: fontFamily.OpenSansRegular,
     color: colors.black,
     textAlignVertical: "top",
     elevation: 20,
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.4,
     shadowRadius: 8,
     marginTop:20
   },
   gradientMain:{
    alignSelf:'center'
   }
});

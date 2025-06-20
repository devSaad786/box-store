import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { fontFamily } from "../assets/fonts";
import { fontSizes } from "../utilities/fontSizes";
import { colors } from "../utilities/colors";
import images from "../assets/images";
import Ionicons from "react-native-vector-icons/Ionicons";

const ratingsandreviews = [
  {
    image: images.williammark,
    title: "William Mark",
    days: "2 days ago",
    ratings: "4.5 Ratings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor in.",
  },
  {
    image: images.williammark,
    title: "William Mark",
    days: "2 days ago",
    ratings: "4.5 Ratings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor in.",
  },
  {
    image: images.williammark,
    title: "William Mark",
    days: "2 days ago",
    ratings: "4.5 Ratings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor in.",
  },
  {
    image: images.williammark,
    title: "William Mark",
    days: "2 days ago",
    ratings: "4.5 Ratings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor in.",
  },
  {
    image: images.williammark,
    title: "William Mark",
    days: "2 days ago",
    ratings: "4.5 Ratings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor in.",
  },
];

const RatingsReviews = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={item.image} style={styles.profileImage} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.days}>{item.days}</Text>
        </View>
      </View>

      {/* Ratings below William Mark and days */}
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={18} color={colors.red} />
        <Text style={styles.ratingText}>{item.ratings}</Text>
      </View>

      {/* Description below ratings */}
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ratingsandreviews}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
     
    </SafeAreaView>
  );
};

export default RatingsReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    paddingBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:-20
  },
  name: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight:600
  },
  days: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
     marginTop: -25,
     marginLeft:60
  },
  ratingText: {
    fontSize: fontSizes.sm,
    color: colors.black,
    // marginLeft: 60,
   
    fontFamily: fontFamily.OpenSansRegular,
  },
  description: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    marginTop: 6,
    lineHeight: 18,
    marginLeft:67
  },
  halfLine: {
    height: 1,
    backgroundColor: colors.gray,
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
  },
});

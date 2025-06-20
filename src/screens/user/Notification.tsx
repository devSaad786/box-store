import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { useNavigation } from '@react-navigation/native';

import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";

const notifications = new Array(15).fill(null).map((_, index) => ({
  title: "Lorem Ipsum dolor sit",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
}));

const NotificationsScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="Notifications" onBackPress={() => navigation.goBack()}/>

      <FlatList
        data={notifications}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.combinedText}>
              <Text style={styles.bold}>{item.title}</Text>
              {"\n\n"} {/* Added space for better separation */}
              {item.message}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // White with 90% opacity
    borderRadius: 12, // Slightly rounded corners
    padding: 15, // More padding for better spacing
    marginHorizontal: 5,
    marginVertical: 10, // Increased vertical spacing between cards
    width: width * 0.9,
    alignSelf: "center",
    elevation: 10, // Slight shadow for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Slight offset for iOS shadow
    shadowOpacity: 0.2, // Lighter shadow opacity
    shadowRadius: 8, // More pronounced shadow for iOS
  },
  combinedText: {
    color: colors.black, // Default text color
    fontFamily: fontFamily.OpenSansLight,
    fontSize: fontSizes.sm, // Slightly larger font for better readability
    marginBottom: 4, // Ensures some space at the bottom of the text
  },
  bold: {
    fontFamily: fontFamily.OpenSansBold,
    fontWeight: "bold", // Ensuring bold weight for the title
    fontSize: fontSizes.sm2, // Font size from the utility file
    
  },
});

export default NotificationsScreen;


import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import BackHeader from "../../components/BackHeader";
import React, { useState } from "react";
import { fontSizes } from "../../utilities/fontSizes";
import { fontFamily } from "../../assets/fonts";
import { colors } from "../../utilities/colors";
import { width, height } from "../../utilities";
import images from "../../assets/images";
import SearchInput from "../../components/CustomSearchInput";
import { useNavigation } from '@react-navigation/native';

// Corrected chat data object
const chats = [
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
  {
    image: images.Amelia, // Assuming 'john' is an image in your assets folder
    title: "Amelia",
    message: "Lorem ipsum dummy text",
    title1: "1",
    time: "5:45pm",
  },
 
  // Add more chat objects as needed
];

const Chat = () => {
    const [query, setQuery] = useState("");
      const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="Chat" onBackPress={() => navigation.goBack()} />
      <View style={{ marginTop: 20 }}>
      <SearchInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search Here..."
      />
    </View>

      <FlatList
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => navigation.navigate("Chat1")}
>
            <View style={styles.chatCard}>
            <Image source={item.image} style={styles.image} />
          
            <View style={styles.textContainer}>
              <Text style={styles.bold}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          
            <View style={styles.rightSection}>
              <Text style={styles.title1}>{item.title1}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatCard: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
   
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  bold: {
    fontFamily: fontFamily.OpenSansBold,
    fontSize: fontSizes.md,
    color: colors.black,
    fontWeight:700
  },
  message: {
    fontFamily: fontFamily.OpenSansLight,
    fontSize: fontSizes.sm2,
    color: colors.black,
    marginTop: 5,
    fontWeight:200
  },

  rightSection: {
    justifyContent: "center",
    alignItems: "flex-end",
    
  },
  title1: {
    backgroundColor: colors.red,
    color: colors.white,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansBold,
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 6, // adjust as needed
    right:5
  },
  time: {
    fontFamily: fontFamily.OpenSansLight,
    fontSize: fontSizes.sm,
    color: colors.black,
    fontWeight:200
  },
});

export default Chat;

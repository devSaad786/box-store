import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { width, height } from "../utilities"; // Ensure height is available
import images from "../assets/images"; // your icons should be mapped here
import { fontFamily } from "../assets/fonts";
import { colors } from "../utilities/colors";

const timelineData = [
  { status: "Order Received", date: "July 08,2023", type: "received" },
  { status: "Order Received", date: "July 08,2023", type: "received" },
  { status: "Order On Way", date: "July 08,2023", type: "onWay" },
  { status: "Order Delivered", date: "July 08,2023", type: "delivered" },
];

const iconMap = {
  received: images.tick,      // red check icon
  onWay: images.van,          // blue truck icon
  delivered: images.hand,     // blue delivery icon
};

const TimelineItem = ({ item, isLast }) => {
  const isRed = item.type === "received";
  const isBlue = item.type === "onWay" || item.type === "delivered";

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftColumn}>
        <View style={styles.iconWrapper}>
          <Image source={iconMap[item.type]} style={styles.icon} />
        </View>
        {!isLast && (
          <View
            style={[
              styles.verticalLine,
              { borderColor: isRed ? "#B71C1C" : "#0D1C8B" },
            ]}
          />
        )}
      </View>

      <View style={styles.rightContent}>
        <Text
          style={[
            styles.statusText,
            { color: isRed ? "#B71C1C" : "#0D1C8B" },
          ]}
        >
          {item.status}
        </Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );
};

const OrderTimeline = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={timelineData}
        renderItem={({ item, index }) => (
          <TimelineItem
            item={item}
            isLast={index === timelineData.length - 1}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};

export default OrderTimeline;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    width: width * 0.87, // Updated to requested width
    height: height * 0.38, // Updated to requested height
    alignSelf: "center",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginTop: 5,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 2,
  },
  leftColumn: {
    alignItems: "center",
    width: 40,
  },
  iconWrapper: {
    width: 35,
    height: 40,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  icon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
  },
  verticalLine: {
    width: -1,  // Decreased width
    height: 40, // Decreased height
    borderStyle: "dashed",
    borderWidth: 1,
    marginTop: 1, // Adjusted to match the icon position
  },
  
  rightContent: {
    flex: 1,
    paddingLeft: 12,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: fontFamily.OpenSansBold,
  },
  dateText: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
    fontFamily: fontFamily.OpenSansRegular,
  },
});

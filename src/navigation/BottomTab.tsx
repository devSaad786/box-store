import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, StyleSheet } from "react-native";
import { ParamListBase } from "@react-navigation/native";

import Home from "../screens/user/Home";
import CategoriesScreen from "../screens/user/Categories";
import MyCart from "../screens/user/MyCart";
import Profile from "../screens/Auth/Profile";
import Settings from "../screens/Auth/Settings";


import images from "../assets/images";


interface bottomTabParamList extends ParamListBase { }

const TabNav = createBottomTabNavigator<bottomTabParamList>();

const BottomTab = () => {
  return (
    <TabNav.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, size }) => {
          // Use black version if focused, else default
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused ? images.homeBlack : images.home2;
          } else if (route.name === "Category") {
            iconSource = focused ? images.menuBlack : images.menu1;
          } else if (route.name === "My Cart") {
            iconSource = focused ? images.shoppingBlack : images.shopping2;
          } else if (route.name === "Profile") {
            iconSource = focused ? images.profileBlack : images.profile2;
          } else if (route.name === "Settings") {
            iconSource = focused ? images.settingsBlack : images.settings;
          }

          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.tabBarLabel, { color: focused ? "black" : "gray" }]}>
            {route.name}
          </Text>
        ),
      })}
    >
      <TabNav.Screen name="Category" component={CategoriesScreen} />
      <TabNav.Screen name="My Cart" component={MyCart} />
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Profile" component={Profile} />
      <TabNav.Screen name="Settings" component={Settings} />
    </TabNav.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 85,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "white",
    // borderTopWidth: 0.5,
    // borderTopColor: "#ccc",
    borderTopLeftRadius: 15,   // Rounded corners on left side
    borderTopRightRadius: 15,  // Rounded corners on right side
    overflow: "hidden",        // Make sure radius clips children
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
    textAlign: "center",
  },
});

export default BottomTab;

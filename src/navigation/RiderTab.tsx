import React, { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

// Screens
import Home1 from "../screens/rider/Home1";
import Historyy from "../screens/rider/Historyy";
import MyProfile1 from "../screens/rider/MyProfile1";
import Settings2 from "../screens/rider/Settings2";

// Assets
import images from "../assets/images";

// Dummy screen for the toggle tab
const DummyScreen = () => null;

interface BottomTabParamList extends ParamListBase {}

const TabNav = createBottomTabNavigator<BottomTabParamList>();

const RiderTab = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <TabNav.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, size }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused ? images.homeBlack : images.home2;
          } else if (route.name === "History") {
            iconSource = focused ? images.menuBlack : images.menu1;
          } else if (route.name === "Profile") {
            iconSource = focused ? images.profileBlack : images.profile2;
          } else if (route.name === "Settings") {
            iconSource = focused ? images.settingsBlack : images.settings;
          }

          return iconSource ? (
            <Image
              source={iconSource}
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          ) : null;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.tabBarLabel, { color: focused ? "black" : "gray" }]}>
            {route.name}
          </Text>
        ),
      })}
    >
      <TabNav.Screen name="History" component={Historyy} />
      <TabNav.Screen name="Profile" component={MyProfile1} />
      <TabNav.Screen name="Home" component={Home1} />
      <TabNav.Screen name="Settings" component={Settings2} />
      <TabNav.Screen
  name="Toggle"
  component={DummyScreen}
  options={{
    tabBarButton: () => (
      <View style={styles.toggleButton}>
        <View style={styles.scaledSwitch}>
          <Switch
            value={isToggled}
            onValueChange={() => setIsToggled((prev) => !prev)}
            thumbColor={isToggled ? "white" : "red"}
            trackColor={{ false: "white", true: "red" }}
          />
        </View>
        <Text style={{ fontSize: 12, color: isToggled ? "black" : "gray", top: 1 }}>
          On/Off
        </Text>
      </View>
    ),
  }}
/>
    </TabNav.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 85,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
    textAlign: "center",
  },
  toggleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  scaledSwitch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});

export default RiderTab;

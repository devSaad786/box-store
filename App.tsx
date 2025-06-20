import { View, StatusBar } from "react-native";
import React, { useState } from "react";
// import Toast from "react-native-toast-message";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import Drawer from "./src/navigation/Drawer";
import { colors } from "./src/utilities/colors";
import RoleContext, { useRoleContext } from "./src/context/roleContext";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-get-random-values';
import 'react-native-reanimated';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "./src/navigation/Drawer";
import { RootState, store } from "./src/redux/store";
import { Provider, useSelector } from 'react-redux';
import RiderTab from "./src/navigation/RiderTab";
import AppStack from "./src/navigation/AppStack";
import RoleSelector from "./src/screens/Auth/RoleSelector";
import Toast from "react-native-toast-message";
import Loader from "./src/components/Loader";



const MainNavigator = () => {
  const selectedRole = useSelector<RootState>(val => val.role.selectedRole);

  if (selectedRole === 'user') {
    return <Drawer />;
  } else if (selectedRole === 'rider') {
    return <AppStack />;
  } else {
    return <RoleSelector />;
  }
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        
        <NavigationContainer>
          <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              barStyle="dark-content"
            />

            <MainNavigator />
            <Toast />
            <Loader />
          </View>

        </NavigationContainer>
      </Provider>
      {/* </RoleContext.Provider> */}
    </GestureHandlerRootView>
  );
};

export default App;

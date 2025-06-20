// navigation/AppStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoleContext } from "../context/roleContext";

// import RoleSelector from '../screens/RoleSelector';
// import PreLogin from '../screens/PreLogin';
// import TermsAndConditions from '../screens/TermsAndConditions';
// import Login from '../screens/Login';
// import LoginWithPhone from '../screens/LoginWithPhone';
// import OtpVerification from '../screens/OtpVerification';
// import FirstProfile from '../screens/FirstProfile';
import RoleSelector from "../screens/Auth/RoleSelector";
import PreLogin from "../screens/Auth/PreLogin";
import TermsAndConditions from "../screens/Auth/TermsAndCondition";
import Login from "../screens/Auth/SignInWithEmail";
import Login1 from "../screens/Auth/SignInWithPhoneNumber";
import OtpVerification from "../screens/Auth/OtpVerification";
import FirstProfile from "../screens/Auth/CreateProfile";
import PrivacyPolicy from '../screens/Auth/PrivacyPolicy';
import Helpandfeedback from '../screens/Auth/HelpAndFeedback';
import FirstProfile1 from '../screens/Auth/CreateProfile1';
import RiderTab from './RiderTab';
import Chat from '../screens/user/Chat';
import NotificationsScreen from '../screens/user/Notification';
import JobDetail from '../screens/rider/JobDetail';
import Dropoflocation from '../screens/rider/DropOfLocation';
import OnJob from '../screens/rider/OnJob';
import ThankYou2 from '../screens/rider/ThankYou2';
import RoleContext from '../context/roleContext';
import Settings1 from '../screens/Auth/Settings1';
import License from '../screens/rider/License';
import Chat1 from '../screens/user/Chat1';
import SecondProfile1 from '../screens/rider/EditProfile1';
import MyProfile1 from '../screens/rider/MyProfile1';
import ThankYou from '../screens/user/ThankYou';
import ThankYou1 from '../screens/user/ThankYou1';
import Historyy from '../screens/rider/Historyy';
import JobDetail1 from '../screens/rider/JobDetail1';
import Settings3 from '../screens/rider/Settings3';

const Stack = createNativeStackNavigator();

const AppStack = () => {
   const { role } = useRoleContext();
  return (
    <Stack.Navigator
    initialRouteName="RoleSelector"  // <-- Set initial route here
    screenOptions={{ headerShown: false }}
  >
      <Stack.Screen name="Home" component={RiderTab} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
      <Stack.Screen name="DropOffLocation" component={Dropoflocation} />
      <Stack.Screen name="OnJob" component={OnJob} />
      <Stack.Screen name="ThankYou2" component={ThankYou2} />
      <Stack.Screen name="RoleSelector" component={RoleSelector} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="HelpAndFeedback" component={Helpandfeedback} />
      {/* <Stack.Screen name="Settings1" component={Settings1} /> */}
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="PreLogin" component={PreLogin} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login1" component={Login1} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="CreateProfile1" component={FirstProfile1} />
      <Stack.Screen name="License" component={License} />
      <Stack.Screen name="Chat1" component={Chat1} />
      <Stack.Screen name="EditProfile1" component={SecondProfile1} />
      <Stack.Screen name="MyProfile1" component={MyProfile1} />
      <Stack.Screen name="ThankYou1" component={ThankYou1} />
      <Stack.Screen name="Historyy" component={Historyy} />
      <Stack.Screen name="JobDetail1" component={JobDetail1} />
      <Stack.Screen name="Settings3" component={Settings3} />
     
    </Stack.Navigator>
  );
};

export default AppStack;

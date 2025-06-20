import React, { FC } from "react";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../components/Drawer/CustomDrawer";
import { genericRatio } from "../helper/helper";

// Screens
import RoleSelector from "../screens/Auth/RoleSelector";
import PreLogin from "../screens/Auth/PreLogin";
import TermsAndConditions from "../screens/Auth/TermsAndCondition";
import Login from "../screens/Auth/SignInWithEmail";
import Login1 from "../screens/Auth/SignInWithPhoneNumber";
import OtpVerification from "../screens/Auth/OtpVerification";
import FirstProfile from "../screens/Auth/CreateProfile";
import Home from "../screens/user/Home";
import CategoriesScreen from "../screens/user/Categories";
import Chat from "../screens/user/Chat";
import Chat1 from "../screens/user/Chat1";
import Category01 from "../screens/user/Category01";
import Productdetails from "../screens/user/ProductDetails";
import RatingsAndReviews from "../screens/user/RatingsAndReview";
import MyCart from "../screens/user/MyCart";
import Checkout from "../screens/user/Checkout";
import EditAddress from "../screens/user/EditAddress";
import EditAddress1 from "../screens/user/EditAddress1";
import AddNewAddress from "../screens/user/AddNewAddress";
import SelectPayment from "../screens/Auth/SelectPayments";
import Profile from "../screens/Auth/Profile";
import MyProfile from "../screens/Auth/MyProfile";
import SecondProfile from "../screens/Auth/EditProfile";
import MyOrder from "../screens/user/MyOrder";
import OrderStatus from "../screens/user/OrderStatus";
import orderdetails from "../screens/user/OrderDetails";
import OrderStatus1 from "../screens/user/OrderStatus1";
import MyFavorites from "../screens/user/MyFavorites";
import ShippingAddress from "../screens/user/ShippingAddress";
import CardDetail from "../screens/Auth/CardDetails";
import Settings from "../screens/Auth/Settings";
import Settings1 from "../screens/Auth/Settings1";
import PrivacyPolicy from "../screens/Auth/PrivacyPolicy";
import Helpandfeedback from "../screens/Auth/HelpAndFeedback";
import ThankYou from "../screens/user/ThankYou";
import NotificationsScreen from "../screens/user/Notification";
import ThankYou1 from "../screens/user/ThankYou1";
import Orderdetails from "../screens/user/OrderDetails";
import BottomTab from "./BottomTab";
import FirstProfile1 from "../screens/Auth/CreateProfile1";
import License from "../screens/rider/License";
import Home1 from "../screens/rider/Home1";
import MyProfile1 from "../screens/rider/MyProfile1";
import History from "../screens/rider/History";
import SecondProfile1 from "../screens/rider/EditProfile1";
import EditLicense from "../screens/rider/EditLicense";
import JobDetail from "../screens/rider/JobDetail";
import Dropoflocation from "../screens/rider/DropOfLocation";
import OnJob from "../screens/rider/OnJob";
import ThankYou2 from "../screens/rider/ThankYou2";
import Settings2 from "../screens/rider/Settings2";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
// import FirstProfile1 from "../screens/Auth/CreateProfile1";

const DrawerNav = createDrawerNavigator();

const Drawer: FC = () => {
    const isLogin = useSelector<RootState>(val => val.role.isLogin)
    return (
      <DrawerNav.Navigator
        screenOptions={{
          headerShown: false, // Hide header for all screens in the drawer
          drawerStyle: {
            borderTopRightRadius: genericRatio(20),
            borderBottomRightRadius: genericRatio(20),
            width:'100%'
          },
        }}
        initialRouteName={isLogin?'BottomTab':"RoleSelector"}
        backBehavior="history"
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawer {...props} />
        )} // Custom Drawer content
      >
        <DrawerNav.Screen name="BottomTab" component={BottomTab} />
        <DrawerNav.Screen name="Home1" component={Home1} />
        <DrawerNav.Screen
          options={{
            swipeEnabled: false,
          }}
          name="RoleSelector"
          component={RoleSelector}
        />
        <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="PreLogin"
        component={PreLogin}
      />
       <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="Login"
        component={Login}
      />
      <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="TermsAndConditions"
        component={TermsAndConditions}
      />
        <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
        <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="OtpVerification"
        component={OtpVerification}
      />
       <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="Login1"
        component={Login1}
      />
       <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="CreateProfile"
        component={FirstProfile}
      />
      <DrawerNav.Screen
        options={{
          swipeEnabled: false,
        }}
        name="CreateProfile1"
        component={FirstProfile1}
      />
      
        {/* Add your screens here */}
        {/* <DrawerNav.Screen name="Home" component={BottomTab} /> */}
        <DrawerNav.Screen name="Categories" component={CategoriesScreen} />
        <DrawerNav.Screen name="Chat" component={Chat} />
        <DrawerNav.Screen name="Chat1" component={Chat1} />
        <DrawerNav.Screen name="Category01" component={Category01} />
        <DrawerNav.Screen name="ProductDetails" component={Productdetails} />
        <DrawerNav.Screen name="RatingsAndReviews" component={RatingsAndReviews} />
        <DrawerNav.Screen name="MyCart" component={MyCart} />
        <DrawerNav.Screen name="Checkout" component={Checkout} />
        <DrawerNav.Screen name="EditAddress" component={EditAddress} />
        <DrawerNav.Screen name="EditAddress1" component={EditAddress1} />
        <DrawerNav.Screen name="AddNewAddress" component={AddNewAddress} />
        <DrawerNav.Screen name="SelectPayment" component={SelectPayment} />
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="MyProfile" component={MyProfile} />
        <DrawerNav.Screen name="EditProfile" component={SecondProfile} />

        <DrawerNav.Screen name="MyOrder" component={MyOrder} />
        <DrawerNav.Screen name="OrderStatus" component={OrderStatus} />
        <DrawerNav.Screen name="OrderDetails" component={Orderdetails} />
        <DrawerNav.Screen name="OrderStatus1" component={OrderStatus1} />
        <DrawerNav.Screen name="Favorites" component={MyFavorites} />
        <DrawerNav.Screen name="ShippingAddress" component={ShippingAddress} />
        <DrawerNav.Screen name="CardDetail" component={CardDetail} />
        <DrawerNav.Screen name="Settings" component={Settings} />
        <DrawerNav.Screen name="Settings1" component={Settings1} />
        {/* <DrawerNav.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}
        <DrawerNav.Screen name="HelpAndFeedback" component={Helpandfeedback} />
        <DrawerNav.Screen name="ThankYou" component={ThankYou} />
        <DrawerNav.Screen name="Notifications" component={NotificationsScreen} />
        <DrawerNav.Screen name="ThankYou1" component={ThankYou1} />
        {/* Auth Screens (optional in Drawer, usually in Stack) */}
        {/* <DrawerNav.Screen name="RoleSelector" component={RoleSelector} /> */}
        {/* <DrawerNav.Screen name="PreLogin" component={PreLogin} />
        <DrawerNav.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <DrawerNav.Screen name="Login" component={Login} />
        <DrawerNav.Screen name="LoginWithPhone" component={Login1} />
        <DrawerNav.Screen name="OtpVerification" component={OtpVerification} />
        <DrawerNav.Screen name="CreateProfile" component={FirstProfile} /> */}
        {/* rider */}
        <DrawerNav.Screen name="License" component={License} />
        <DrawerNav.Screen name="MyProfile1" component={MyProfile1} />
        <DrawerNav.Screen name="History" component={History} />
        <DrawerNav.Screen name="EditProfile1" component={SecondProfile1} />
        <DrawerNav.Screen name="EditLicense" component={EditLicense} />
        <DrawerNav.Screen name="JobDetail" component={JobDetail} />
        <DrawerNav.Screen name="Dropoflocation" component={Dropoflocation} />
        <DrawerNav.Screen name="OnJob" component={OnJob} />
        <DrawerNav.Screen name="ThankYou2" component={ThankYou2} />
        {/* <DrawerNav.Screen name="Setting" component={Settings2} />
      */}
      
      </DrawerNav.Navigator>
  );
};

export default Drawer;

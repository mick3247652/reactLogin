import React, { Component } from "react";

import SplashScreen from "./screens/Splash";
import SignInScreen from "./screens/SignIn";
import SignUpScreen from "./screens/SignUp";
import UserProfileScreen from "./screens/UserProfile";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

const MainStack = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    UserProfile: {
      screen: UserProfileScreen,
      navigationOptions: {
        headerTitle: 'User Profile',
      },
    },
  },
  {
    initialRouteName: "Splash",
    navigationOptions: {
      headerTintColor: "#a41034",
      headerStyle: {
        backgroundColor: "#fff",
      },
    },
  }
);

const App = createAppContainer(MainStack);

export default () => <App />;
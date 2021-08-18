import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../../screens/home/home.screen";
import { AddPostScreen } from "../../screens/add-post/add-post.screen";
import { ProfileScreen } from "../../screens/profile/profile.screen";
import {
  AddPostRoute,
  HomeRoute,
  ProfileRoute,
  MainRoute,
  AuthRoute,
  SignInRoute,
  SignUpRoute,
} from "./routes.type";
import { AuthScreen } from "../../screens/auth/screens/auth.screen";
import { SignInScreen } from "../../screens/auth/screens/sign-in.screen";
import { SignUpScreen } from "../../screens/auth/screens/sign-up.screen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TAB_ICON = {
  Home: "md-home",
  AddPost: "md-add",
  Profile: "md-person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

const TabStack = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name={HomeRoute} component={HomeScreen} />
    <Tab.Screen name={AddPostRoute} component={AddPostScreen} />
    <Tab.Screen name={ProfileRoute} component={ProfileScreen} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={MainRoute} component={TabStack} />
    <Stack.Group>
      <Stack.Screen name={AuthRoute} component={AuthScreen} />
      <Stack.Screen name={SignInRoute} component={SignInScreen} />
      <Stack.Screen name={SignUpRoute} component={SignUpScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

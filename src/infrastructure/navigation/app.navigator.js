import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../../screens/home/home.screen";
import { AddPostScreen } from "../../screens/add-post/add-post.screen";
import { ProfileScreen } from "../../screens/profile/profile.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  "Add post": "md-add",
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

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Add post" component={AddPostScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

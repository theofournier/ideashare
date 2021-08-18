import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export const AuthScreen = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{isLoggedIn ? "LOGGED IN" : "NOT LOGGED IN"}</Text>
    </View>
  );
};

import React from "react";
import { Button, View } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { AuthRoute } from "../../infrastructure/navigation/routes.type";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="AUTH" onPress={() => navigation.navigate(AuthRoute)} />
      </View>
    </SafeArea>
  );
};

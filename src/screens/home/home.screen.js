import React from "react";
import { Button, View } from "react-native";
import { useDispatch } from "react-redux";
import { SafeArea } from "../../components/utility/safe-area.component";
import { AuthRoute } from "../../infrastructure/navigation/routes.type";
import { onLogOut } from "../../store/actions/auth.action";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeArea>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="AUTH" onPress={() => navigation.navigate(AuthRoute)} />
        <Button title="LOGOUT" onPress={() => dispatch(onLogOut())} />
      </View>
    </SafeArea>
  );
};

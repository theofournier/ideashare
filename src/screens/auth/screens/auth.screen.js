import React from "react";
import { SignInRoute } from "../../../infrastructure/navigation/routes.type";
import { AuthBackground, AuthButton } from "../components/auth.styles";

export const AuthScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <AuthButton
        title="Email / Password"
        onPress={() => navigation.navigate(SignInRoute)}
      />
    </AuthBackground>
  );
};

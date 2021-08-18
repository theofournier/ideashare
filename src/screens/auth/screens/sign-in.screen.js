import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { StackActions } from "@react-navigation/native";
import {
  AuthBackground,
  AuthScrollView,
  AuthContainer,
  Title,
  AuthCard,
  AuthInput,
  AuthButton,
  AuthFootLabel,
} from "../components/auth.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SignUpRoute } from "../../../infrastructure/navigation/routes.type";

import { onLogin } from "../../../store/actions/auth.action";

export const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    if (email && password) {
      return true;
    }
    return false;
  };

  const onPressLogin = () => {
    if (isValid()) {
      dispatch(onLogin({ email, password }));
    }
  };

  return (
    <AuthBackground>
      <AuthScrollView>
        <AuthContainer>
          <Title>Log in to Idea Share</Title>
          <Spacer size="large" />
          <AuthCard>
            <AuthInput
              placeholder="Email address"
              value={email}
              textContentType="username"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(e) => setEmail(e.trim())}
            />
            <Spacer size="medium" />
            <AuthInput
              placeholder="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
            <Spacer size="medium" />
            {!isLoggingIn ? (
              <AuthButton
                title="Log in"
                onPress={onPressLogin}
                disabled={!isValid()}
              />
            ) : (
              <ActivityIndicator animating={true} />
            )}
          </AuthCard>
          <Spacer size="large" />
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(StackActions.replace(SignUpRoute))
            }
          >
            <AuthFootLabel>Don't have an account? Register</AuthFootLabel>
          </TouchableOpacity>
        </AuthContainer>
      </AuthScrollView>
    </AuthBackground>
  );
};

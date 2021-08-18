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
import { SignInRoute } from "../../../infrastructure/navigation/routes.type";

import { onRegister } from "../../../store/actions/auth.action";

export const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isRegisteringIn = useSelector((state) => state.auth.isRegisteringIn);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    if (email && password && firstname.trim() && lastname.trim()) {
      return true;
    }
    return false;
  };

  const onPressRegister = () => {
    if (isValid()) {
      dispatch(
        onRegister({
          firstname: firstname.trim(),
          lastname: lastname.trim(),
          email,
          password,
        })
      );
    }
  };

  return (
    <AuthBackground>
      <AuthScrollView>
        <AuthContainer>
          <Title>Register to Idea Share</Title>
          <Spacer size="large" />
          <AuthCard>
            <AuthInput
              placeholder="Firstname"
              value={firstname}
              textContentType="name"
              autoCapitalize="words"
              onChangeText={(e) => setFirstname(e)}
            />
            <AuthInput
              placeholder="Lastname"
              value={lastname}
              textContentType="name"
              autoCapitalize="words"
              onChangeText={(e) => setLastname(e)}
            />
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
            {!isRegisteringIn ? (
              <AuthButton
                title="Register"
                onPress={onPressRegister}
                disabled={!isValid()}
              />
            ) : (
              <ActivityIndicator animating={true} />
            )}
          </AuthCard>
          <Spacer size="large" />
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(StackActions.replace(SignInRoute))
            }
          >
            <AuthFootLabel>Already have an account? Log in</AuthFootLabel>
          </TouchableOpacity>
        </AuthContainer>
      </AuthScrollView>
    </AuthBackground>
  );
};

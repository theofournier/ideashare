import { ScrollView } from "react-native";
import { Button, Input } from "react-native-elements";
import styled from "styled-components";

import { Text } from "../../../components/typography/text.component";

export const AuthBackground = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[5]};
`;

export const AuthScrollView = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Title = styled(Text).attrs({ variant: "title" })`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const AuthCard = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: 20px;
  width: 100%;
`;

export const AuthInput = styled(Input)``;

export const AuthButton = styled(Button)``;

export const AuthFootLabel = styled(Text)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

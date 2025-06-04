import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: #eaf5ff;
  align-items: center;
  padding-top: ${height * 0.03}px;
  padding-left: ${width * 0.05}px;
  padding-right: ${width * 0.05}px;
`;

export const WelcomeTitle = styled.Text`
  font-size: ${width * 0.1}px;
  font-weight: 700;
  text-align: center;
  padding-top: ${height * 0.1}px;
`;

export const WelcomeText = styled.Text`
  font-size: ${width * 0.06}px;
  text-align: center;
  margin-top: 10px;
  width: 90%;
`;
export const WelcomeEnter = styled.TouchableOpacity`
  font-size: ${width * 0.06}px;
  font-weight: 700;
  margin-top: 8%;
`;

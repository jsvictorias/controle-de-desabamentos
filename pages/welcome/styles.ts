import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: #eaf5ff;
  align-items: center;
  padding-top: ${height * 0.03}px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  padding-top: ${height * 0.1}px;
`;

export const WelcomeText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
export const WelcomeEnter = styled.TouchableOpacity`
  font-size: 30px;
  font-weight: 700;
  margin-top: 5%;
  background-color: rgb(137, 196, 245);
  padding: 20px;
  border-radius: 15px;
`;
export const WelcomeClean = styled.TouchableOpacity`
  font-weight: 700;
  margin-top: 3%;
  background-color: rgb(158, 192, 220);
  padding: 20px;
  border-radius: 15px;
`;

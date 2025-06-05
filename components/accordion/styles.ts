import styled from "styled-components/native";

export const AccordionCard = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const Header = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  flex-shrink: 1;
`;

export const AccordionContent = styled.View`
  margin-top: 10px;
`;

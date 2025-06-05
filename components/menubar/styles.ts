import styled from "styled-components/native";

export const MenuContainer = styled.View`
  height: 10vh;
  background-color: #4390dd;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  z-index: 1000;  
`;
export const ShowItens = styled.View`
  position: absolute;
  top: 10vh;
  left: 0;
  width: auto;
  gap: 20px;
  height: auto;
  background-color: #4390dd;
  padding: 10px;
  z-index: 1;
  padding: 30px;
  right: 0;
`;

export const MenuText = styled.TouchableOpacity`
  font-size: 20px;
  font-weight: bold;
`;

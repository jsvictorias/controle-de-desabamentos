import styled from "styled-components/native";

export const AccordionContainer = styled.View<{ isWarning?: boolean }>`
  border-width: 2px;
  border-color: ${(props: { isWarning: any }) =>
    props.isWarning ? "#FF0000" : "#CCCCCC"};
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const AccordionHeader = styled.View<{ isWarning?: boolean }>`
  padding: 15px;
  background-color: #f5f5f5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionTitle = styled.Text<{ isWarning?: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props: { isWarning: any }) =>
    props.isWarning ? "#FF0000" : "#333333"};
`;

export const AccordionContent = styled.View`
  padding: 15px;
  background-color: #ffffff;
`;
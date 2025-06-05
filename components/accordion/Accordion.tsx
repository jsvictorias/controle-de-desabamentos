import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AccordionComponentProps } from "./props";
import * as S from "./styles";

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  title,
  children,
  isWarning = false,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <S.AccordionContainer isWarning={isWarning}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <S.AccordionHeader isWarning={isWarning}>
          <S.AccordionTitle isWarning={isWarning}>{title}</S.AccordionTitle>
          <Ionicons
            name={isCollapsed ? "chevron-down" : "chevron-up"}
            size={20}
            color="#000"
            style={{ marginLeft: 10 }}
          />
        </S.AccordionHeader>
      </TouchableOpacity>
      {isExpanded && <S.AccordionContent>{children}</S.AccordionContent>}
    </S.AccordionContainer>
  );
};

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import Collapsible from "react-native-collapsible";
import { AccordionComponentProps } from "./props";
import * as S from "./styles";

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  title,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
  }

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <S.AccordionCard>
      <S.Header onPress={toggleExpanded}>
        <S.AccordionTitle>{title}</S.AccordionTitle>
        <Ionicons
          name={isCollapsed ? "chevron-down" : "chevron-up"}
          size={20}
          color="#000"
        />
      </S.Header>

      <Collapsible collapsed={isCollapsed}>
        <S.AccordionContent>{children}</S.AccordionContent>
      </Collapsible>
    </S.AccordionCard>
  );
};

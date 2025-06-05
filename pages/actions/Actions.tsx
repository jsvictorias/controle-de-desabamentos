import { AccordionComponent } from "@/components/accordion/Accordion";
import { MenuBar } from "@/components/menubar/MenuBar";
import { Text, View } from "react-native";
import * as S from "./styles";
export const Actions = () => {
  return (
    <View>
      <MenuBar />
      <S.ActionsContainer>
        <S.ActionTitle>📉 Ações de Mitigação</S.ActionTitle>

        <S.ActionText>
          Estas ações ajudam a reduzir o risco de deslizamentos em sua área
          monitorada. Siga as orientações abaixo sempre que os sensores
          indicarem alerta.
        </S.ActionText>

        <View>
          <AccordionComponent title="💧 Quando a umidade está alta">
            <Text style={{ marginBottom: 5 }}>
              • Verifique drenagem: certifique-se de que há escoamento de água
              adequado.
            </Text>
            <Text style={{ marginBottom: 5 }}>
              • Desobstrua calhas e valas.
            </Text>
            <Text style={{ marginBottom: 5 }}>
              • Evite despejo de água de esgoto no solo.
            </Text>
            <Text style={{ marginBottom: 5 }}>
              • Monitore a presença de rachaduras no terreno.
            </Text>
          </AccordionComponent>
        </View>
      </S.ActionsContainer>
    </View>
  );
};

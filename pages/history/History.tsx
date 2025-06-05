import { AccordionComponent } from "@/components/accordion/Accordion";
import { MenuBar } from "@/components/menubar/MenuBar";
import { ScrollView, Text, View } from "react-native";
import * as S from "./styles";

export const History = () => {
  return (
    <View style={{ flex: 1 }}>
      <MenuBar />

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}
      >
        <S.HistoryContainer>
          <S.HistoryTitle>Histórico de Monitoramento</S.HistoryTitle>

          <View style={{ marginTop: 50, width: "80%" }}>
            <AccordionComponent title="Nome">
              <Text style={{ marginBottom: 5 }}>última atualização: 1min</Text>
              <Text style={{ marginBottom: 5 }}>🌱 Umidade: 45%</Text>
              <Text style={{ marginBottom: 5 }}>⛰️ Inclinação: 12 graus</Text>
            </AccordionComponent>
          </View>
        </S.HistoryContainer>
      </ScrollView>
    </View>
  );
};

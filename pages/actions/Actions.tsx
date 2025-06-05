import { AccordionComponent } from "@/components/accordion/Accordion";
import { LinkList } from "@/components/links/LinkList";
import { MenuBar } from "@/components/menubar/MenuBar";
import { ScrollView, Text, View } from "react-native";
import * as S from "./styles";

export const Actions = () => {
  return (
    <View style={{ flex: 1 }}>
      <MenuBar />

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}
      >
        <S.ActionsContainer>
          <S.ActionTitle>📉 Ações de Mitigação</S.ActionTitle>

          <S.ActionText>
            Estas ações ajudam a reduzir o risco de deslizamentos em sua área
            monitorada. Siga as orientações abaixo sempre que os sensores
            indicarem alerta.
          </S.ActionText>

          <View style={{ marginTop: 50, width: "80%" }}>
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

            <AccordionComponent title="🧱 Quando há risco de deslizamento">
              <Text style={{ marginBottom: 5 }}>
                • Evacue a área em caso de sinais de movimentação.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                • Não permaneça em construções em áreas inclinadas instáveis.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                • Observe sinais como inclinação de postes, árvores ou trincas
                em paredes.
              </Text>
            </AccordionComponent>

            <AccordionComponent title="🌿 Ações de longo prazo">
              <Text style={{ marginBottom: 5 }}>
                • Plante vegetação com raízes profundas (ex: capim vetiver,
                bambu).
              </Text>
              <Text style={{ marginBottom: 5 }}>
                • Construa canaletas ou escadas hidráulicas para controlar o
                fluxo de água.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                • Evite cortes ou aterros sem acompanhamento técnico.
              </Text>
            </AccordionComponent>

            <AccordionComponent title="🧠 Saiba mais">
              <LinkList
                url="https://www.ba.gov.br/defesacivil/servicos/deslizamento-o-que-fazer#:~:text=Se%20voc%C3%AA%20observar%20um%20princ%C3%ADpio,haver%20novos%20deslizamentos%3B%205%20%2D%20Posso"
                text="Deslizamento - O que fazer?"
              />
              <LinkList
                url="https://news.ama.eco/o-que-fazer-em-situacoes-de-inundacao-e-deslizamento-de-terra/"
                text="O que fazer em situações de inundação e deslizamento de terra"
              />
            </AccordionComponent>
          </View>
        </S.ActionsContainer>
      </ScrollView>
    </View>
  );
};

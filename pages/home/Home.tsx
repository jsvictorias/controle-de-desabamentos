import { Checkbox } from "@/components/checkbox/Checkbox";
import { Input } from "@/components/input/Input";
import { MenuBar } from "@/components/menubar/MenuBar";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import * as S from "./styles";

export const Home = () => {
  const [otherOptions, setOtherOptions] = useState({
    terreno: false,
    usoSolo: false,
    construcao: false,
  });

  const toggleOption = (key: keyof typeof otherOptions) => {
    setOtherOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <MenuBar />
      <S.HomeTitle>Cadastro de Dados</S.HomeTitle>
      <S.HomeContainer>
        <S.ScrollText>
          Endereço ou nome da propriedade/local monitorado:
        </S.ScrollText>
        <Input secureTextEntry={false} />
        <S.ScrollText>
          Região e localidade (ex: São Paulo, Zona Leste)
        </S.ScrollText>
        <Input secureTextEntry={false} />
        <S.ScrollText>Tipo de Terreno:</S.ScrollText>
        <Checkbox label="Morro/Encosta" />
        <Checkbox label="Plano" />
        <Checkbox label="Áreas urbanas com corte/aterro" />
        <Checkbox
          label="Outro"
          checked={otherOptions.terreno}
          onPress={() => toggleOption("terreno")}
        />
        {otherOptions.terreno && (
          <Input
            secureTextEntry={false}
            placeholder="Descreva em poucas palavras"
          />
        )}

        <S.ScrollText>Uso do solo:</S.ScrollText>
        <Checkbox label="Residencial" />
        <Checkbox label="Agrícola" />
        <Checkbox label="Florestal" />
        <Checkbox label="Industrial" />
        <Checkbox
          label="Outro"
          checked={otherOptions.usoSolo}
          onPress={() => toggleOption("usoSolo")}
        />
        {otherOptions.usoSolo && (
          <Input
            secureTextEntry={false}
            placeholder="Descreva em poucas palavras"
          />
        )}

        <S.ScrollText>
          Existe construção ou casa próxima à área monitorada?
        </S.ScrollText>
        <Checkbox
          label="Sim"
          checked={otherOptions.construcao}
          onPress={() => toggleOption("construcao")}
        />
        {otherOptions.construcao && (
          <Input
            secureTextEntry={false}
            placeholder="A que distância? (em metros)"
          />
        )}
        <Checkbox label="Não" />

        <S.ScrollText>
          Existe histórico de deslizamentos ou movimentação de terra na região?
        </S.ScrollText>
        <Checkbox label="Sim" />
        <Checkbox label="Não" />
        <Checkbox label="Não sei" />

        
      </S.HomeContainer>
      <S.Enter>Cadastrar</S.Enter>
    </ScrollView>
  );
};

import { Checkbox } from "@/components/checkbox/Checkbox";
import { Input } from "@/components/input/Input";
import { MenuBar } from "@/components/menubar/MenuBar";
import { saveToStorage } from "@/utils/storage";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";

export const Home = () => {
  const [formData, setFormData] = useState({
    endereco: "",
    regiao: "",
    terrenoOutro: "",
    usoSoloOutro: "",
    distanciaConstrucao: "",
  });

  const [otherOptions, setOtherOptions] = useState({
    terreno: false,
    usoSolo: false,
    construcao: false,
  });

  const toggleOption = (key: keyof typeof otherOptions) => {
    setOtherOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const dataToSave = {
      ...formData,
      otherOptions,
    };

    await saveToStorage("formData", dataToSave);
    setFormData({
      endereco: "",
      regiao: "",
      terrenoOutro: "",
      usoSoloOutro: "",
      distanciaConstrucao: "",
    });
    setOtherOptions({
      terreno: false,
      usoSolo: false,
      construcao: false,
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <MenuBar />
      <S.HomeTitle>Cadastro de Dados</S.HomeTitle>
      <S.HomeContainer>
        <S.ScrollText>
          Endereço ou nome da propriedade/local monitorado:
        </S.ScrollText>
        <Input
          secureTextEntry={false}
          value={formData.endereco}
          onChangeText={(text) => handleInputChange("endereco", text)}
        />

        <S.ScrollText>
          Região e localidade (ex: São Paulo, Zona Leste)
        </S.ScrollText>
        <Input
          secureTextEntry={false}
          value={formData.regiao}
          onChangeText={(text) => handleInputChange("regiao", text)}
        />

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
            value={formData.terrenoOutro}
            onChangeText={(text) => handleInputChange("terrenoOutro", text)}
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
            value={formData.usoSoloOutro}
            onChangeText={(text) => handleInputChange("usoSoloOutro", text)}
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
            value={formData.distanciaConstrucao}
            onChangeText={(text) =>
              handleInputChange("distanciaConstrucao", text)
            }
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

      <TouchableOpacity onPress={handleSubmit}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          Cadastrar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

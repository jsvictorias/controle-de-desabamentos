import { AppStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

type MenuScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "Menu"
>;

export const MenuBar = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <S.MenuContainer>
      <TouchableOpacity onPress={toggleMenu}>
        <List size={32} color="white" />
      </TouchableOpacity>

      {isMenuVisible && (
        <S.ShowItens>
          <S.MenuText>Cadastro dos dados</S.MenuText>
          <S.MenuText>Visualização dos riscos</S.MenuText>
          <S.MenuText>Histórico de Monitoramento</S.MenuText>
          <S.MenuText onPress={() => navigation.navigate("Actions")}>
            Ações de Mitigações
          </S.MenuText>
        </S.ShowItens>
      )}
    </S.MenuContainer>
  );
};

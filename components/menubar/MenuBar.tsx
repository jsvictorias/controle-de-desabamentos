import { List } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const MenuBar = () => {
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
          <S.MenuText>Ações de Mitigações</S.MenuText>
        </S.ShowItens>
      )}
    </S.MenuContainer>
  );
};

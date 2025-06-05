import { Checkbox } from "@/components/checkbox/Checkbox";
import { Input } from "@/components/input/Input";
import { AppStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import * as S from "./styles";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "Login"
>;

export const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <S.LoginContainer>
      <Input placeholder="Cadastro" secureTextEntry={false} />
      <Input placeholder="Senha" secureTextEntry={true} />

      <Checkbox label="Manter Login" />

      <S.Button>
        <S.ButtonText
          onClick={() => {
            navigation.navigate("Home");
          }}
        >
          Entrar
        </S.ButtonText>
      </S.Button>

      <S.RegisterText>Não tem cadastro?</S.RegisterText>
      <S.RegisterButton>
        <S.RegisterButtonText
          onClick={() => {
            navigation.navigate("Cadastro");
          }}
        >
          Cadastrar
        </S.RegisterButtonText>
      </S.RegisterButton>
    </S.LoginContainer>
  );
};

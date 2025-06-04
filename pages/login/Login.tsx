import { Checkbox } from "@/components/checkbox/Checkbox";
import { Input } from "@/components/input/Input";
import React from "react";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.LoginContainer>
      <Input placeholder="Cadastro" secureTextEntry={false} />
      <Input placeholder="Senha" secureTextEntry={true} />

      <Checkbox label="Manter Login" />

      <S.Link>Esqueceu a Senha?</S.Link>

      <S.Button>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>

      <S.RegisterText>Não tem cadastro?</S.RegisterText>
      <S.RegisterButton>
        <S.RegisterButtonText>Cadastrar</S.RegisterButtonText>
      </S.RegisterButton>
    </S.LoginContainer>
  );
};

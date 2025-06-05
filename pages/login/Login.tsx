import { Checkbox } from "@/components/checkbox/Checkbox";
import { Input } from "@/components/input/Input";
import { AppStackParamList } from "@/types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as S from "./styles";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "Login"
>;
const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage limpo com sucesso!");
  } catch (error) {
    console.error("Erro ao limpar o AsyncStorage:", error);
  }
};
export const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <S.LoginContainer>
      <Input placeholder="Cadastro" secureTextEntry={false} />
      <Input placeholder="Senha" secureTextEntry={true} />

      <Checkbox label="Manter Login" />

      <S.Button
        onPress={() => {
          navigation.navigate("Home");
          console.log("Botão Entrar pressionado");
        }}
      >
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>

      <S.RegisterText>Não tem cadastro?</S.RegisterText>
      <S.RegisterButton
        onPress={() => {
          navigation.navigate("Cadastro");
          console.log("Botão cadastro pressionado");
        }}
      >
        <S.RegisterButtonText>Cadastrar</S.RegisterButtonText>
      </S.RegisterButton>
      <TouchableOpacity onPress={clearStorage}>
        <Text>Limpar dados</Text>
      </TouchableOpacity>
    </S.LoginContainer>
  );
};

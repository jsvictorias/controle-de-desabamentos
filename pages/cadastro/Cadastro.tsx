import { Input } from "@/components/input/Input";
import { AppStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as S from "./styles";

export const Cadastro = () => {
  type CadastroScreenNavigationProp = NativeStackNavigationProp<
    AppStackParamList,
    "Login"
  >;
  const navigation = useNavigation<CadastroScreenNavigationProp>();
  return (
    <S.CadastroContainer>
      <Input placeholder="Nome" secureTextEntry={false} />
      <Input placeholder="Cadastro (escolha números)" secureTextEntry={false} />
      <Input placeholder="Email" secureTextEntry={false} />
      <Input placeholder="Senha" secureTextEntry={false} />
      <Input placeholder="Confirmar Senha" secureTextEntry={false} />

      <S.Button>
        <S.ButtonText onClick={() => {
            navigation.navigate("Home");
          }}>Cadastrar</S.ButtonText>
      </S.Button>

      <S.RegisterText>Já tem cadastro?</S.RegisterText>
      <S.RegisterButton>
        <S.RegisterButtonText
          onClick={() => {
            navigation.navigate("Login");
          }}
        >
          Entrar
        </S.RegisterButtonText>
      </S.RegisterButton>
    </S.CadastroContainer>
  );
};

import { AppStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import * as S from "./styles";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "Welcome"
>;

export const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -20,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY]);

  return (
    <S.WelcomeContainer>
      <Animated.Image
        source={require("../../assets/images/rain.png")}
        style={{
          width: 200,
          height: 200,
          transform: [{ translateY }],
        }}
        resizeMode="contain"
      />
      <S.WelcomeTitle>WELCOME</S.WelcomeTitle>
      <S.WelcomeText>
        Nosso aplicativo ajuda você a monitorar em tempo real os principais
        indicadores de risco, como umidade do solo e inclinação do terreno,
        oferecendo alertas preventivos e ações de mitigação.
      </S.WelcomeText>

      <S.WelcomeEnter onPress={() => navigation.navigate("Login")}>
        ENTRAR
      </S.WelcomeEnter>
    </S.WelcomeContainer>
  );
};

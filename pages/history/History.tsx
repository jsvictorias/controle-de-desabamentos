import { AccordionComponent } from "@/components/accordion/Accordion";
import { MenuBar } from "@/components/menubar/MenuBar";
import { getLocations } from "@/services/dataService";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import * as S from "./styles";

export const History = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const isFocused = useIsFocused();
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      const loadLocations = async () => {
        const savedLocations = await getLocations();
        setLocations(savedLocations);
      };
      loadLocations();
    }
  }, [isFocused]);

  useEffect(() => {
    const loadLocations = async () => {
      const savedLocations = await getLocations();
      setLocations(savedLocations);
    };

    loadLocations();
  }, []);

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
    <View style={{ flex: 1 }}>
      <MenuBar />

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}
      >
        <S.HistoryContainer>
          <S.HistoryTitle>Histórico de Monitoramento</S.HistoryTitle>

          <View style={{ marginTop: 50, width: "80%" }}>
            {locations.length > 0 ? (
              locations.map((location, index) => (
                <View key={index} style={{ marginBottom: 20 }}>
                  <AccordionComponent title={location}>
                    <Text style={{ marginBottom: 5 }}>
                      última atualização: 1min
                    </Text>
                    <Text style={{ marginBottom: 5 }}>🌱 Umidade: 45%</Text>
                    <Text style={{ marginBottom: 5 }}>
                      ⛰️ Inclinação: 12 graus
                    </Text>
                  </AccordionComponent>
                </View>
              ))
            ) : (
              <View style={{ alignItems: "center" }}>
                <S.HistoryTitle>Nenhum dado adicionado...</S.HistoryTitle>
                <Animated.Image
                  source={require("../../assets/images/history.png")}
                  style={{
                    width: 200,
                    height: 200,
                    transform: [{ translateY }],
                    marginTop: 20,
                  }}
                  resizeMode="contain"
                />
              </View>
            )}
          </View>
        </S.HistoryContainer>
      </ScrollView>
    </View>
  );
};

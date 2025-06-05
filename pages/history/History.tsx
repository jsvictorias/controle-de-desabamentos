import { AccordionComponent } from "@/components/accordion/Accordion";
import { MenuBar } from "@/components/menubar/MenuBar";
import { MockHistoryData } from "@/data/Data";
import { HistoryDataProps } from "@/data/props";
import { getLocations } from "@/services/dataService";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import * as S from "./styles";

const getRandomValue = (baseValue: string) => {
  const baseNumber = parseInt(baseValue.replace(/\D/g, ""));
  const variation = Math.floor(Math.random() * 11) - 5;
  const newValue = baseNumber + variation;
  const clampedValue = Math.max(0, Math.min(100, newValue));
  return baseValue.includes("%") ? `${clampedValue}%` : `${clampedValue} graus`;
};

export const History = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const isFocused = useIsFocused();
  const translateY = useRef(new Animated.Value(0)).current;
  const [sensorData, setSensorData] =
    useState<HistoryDataProps[]>(MockHistoryData);

  const updateSensorData = () => {
    const newData = MockHistoryData.map((item) => ({
      ...item,
      umidade: getRandomValue(item.umidade),
      inclinacao: getRandomValue(item.inclinacao),
    }));
    setSensorData(newData);
  };

  const shouldShowWarning = (data: HistoryDataProps) => {
    const umidadeValue = parseInt(data.umidade.replace("%", ""));
    const inclinacaoValue = parseInt(data.inclinacao.replace(" graus", ""));
    return umidadeValue > 30 && inclinacaoValue > 13;
  };

  useEffect(() => {
    updateSensorData();
    const interval = setInterval(updateSensorData, 2000);
    return () => clearInterval(interval);
  }, []);

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
              locations.map((location, index) => {
                const sensorItem = sensorData[index % sensorData.length];
                const isWarning = shouldShowWarning(sensorItem);

                return (
                  <View key={index} style={{ marginBottom: 20 }}>
                    <AccordionComponent title={location} isWarning={isWarning}>
                      <Text style={{ marginBottom: 5 }}>
                        última atualização: 1min
                      </Text>
                      <View style={{ marginBottom: 10 }}>
                        <Text
                          style={{
                            marginBottom: 5,
                            color: isWarning ? "#FF0000" : "#000000",
                          }}
                        >
                          🌱 Umidade: {sensorItem.umidade}
                        </Text>
                        <Text
                          style={{
                            marginBottom: 5,
                            color: isWarning ? "#FF0000" : "#000000",
                          }}
                        >
                          ⛰️ Inclinação: {sensorItem.inclinacao}
                        </Text>
                      </View>
                    </AccordionComponent>
                  </View>
                );
              })
            ) : (
              <View style={{ alignItems: "center" }}>
                <S.HistoryTitle>Nenhum dado adicionado...</S.HistoryTitle>
                <Animated.Image
                  source={require("../../assets/images/history.png")}
                  style={{
                    width: 400,
                    height: 400,
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

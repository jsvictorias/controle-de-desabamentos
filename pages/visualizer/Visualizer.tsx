import { AccordionComponent } from "@/components/accordion/Accordion";
import { MenuBar } from "@/components/menubar/MenuBar";
import { getFormData } from "@/services/dataService";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import * as S from "./styles";

type LocationData = {
  endereco: string;
  regiao: string;
  terrenoOutro: string;
  usoSoloOutro: string;
  distanciaConstrucao: string;
  otherOptions: {
    terreno: boolean;
    usoSolo: boolean;
    construcao: boolean;
  };
  createdAt: Date;
};

export const Visualizer = () => {
  const [locationsData, setLocationsData] = useState<LocationData[]>([]);
  const isFocused = useIsFocused();
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      const loadLocations = async () => {
        const savedLocations = await getFormData();
        setLocationsData(savedLocations);
      };
      loadLocations();
    }
  }, [isFocused]);

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

  const getRiskMessages = (data: LocationData) => {
    const messages: string[] = [];

    // Verificar riscos relacionados ao terreno
    if (
      data.otherOptions.terreno ||
      data.terrenoOutro.includes("Morro") ||
      data.terrenoOutro.includes("Encosta") ||
      data.terrenoOutro.includes("corte/aterro")
    ) {
      messages.push(
        "Devido ao seu tipo de terreno próximo a morro, encosta ou áreas urbanas com corte/aterro, há grandes riscos de desabamento."
      );
    }

    // Verificar riscos relacionados ao uso do solo
    if (
      data.otherOptions.usoSolo ||
      data.usoSoloOutro.includes("Agrícola") ||
      data.usoSoloOutro.includes("Florestal") ||
      data.usoSoloOutro.includes("Industrial")
    ) {
      messages.push(
        "Devido ao seu tipo de uso do solo (agrícola, florestal ou industrial), há grandes riscos de desabamento."
      );
    }

    // Verificar riscos relacionados a construções próximas
    if (data.otherOptions.construcao && data.distanciaConstrucao) {
      const distance = parseInt(data.distanciaConstrucao);
      if (!isNaN(distance)) {
        if (distance < 50) {
          messages.push(
            `Devido à construção muito próxima (apenas ${distance} metros), há extremo risco de desabamento.`
          );
        } else if (distance < 100) {
          messages.push(
            `Devido à construção próxima (${distance} metros), há grande risco de desabamento.`
          );
        }
      }
    }

    return messages.length > 0
      ? messages
      : ["Nenhum risco crítico identificado."];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <MenuBar />
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}
      >
        <S.VisualizerContainer>
          {locationsData.length > 0 ? (
            <>
              <S.VisualizerTitle>
                Visualização dos Principais Riscos
              </S.VisualizerTitle>

              {locationsData.map((data, index) => (
                <View
                  key={index}
                  style={{ marginBottom: 20, width: "80%", marginTop: 40 }}
                >
                  <AccordionComponent title={data.endereco}>
                    <Text style={{ marginBottom: 5 }}>
                      Última atualização: {formatDate(data.createdAt)}
                    </Text>
                    <Text style={{ marginBottom: 5 }}>
                      Região: {data.regiao}
                    </Text>

                    {getRiskMessages(data).map((message, i) => (
                      <Text
                        key={i}
                        style={{
                          marginBottom: 10,
                          color: message.includes("Nenhum risco")
                            ? "green"
                            : "red",
                          fontWeight: "bold",
                        }}
                      >
                        {message}
                      </Text>
                    ))}
                  </AccordionComponent>
                </View>
              ))}
            </>
          ) : (
            <View style={{ alignItems: "center" }}>
              <S.VisualizerTitle>Nenhum dado adicionado...</S.VisualizerTitle>
              <Animated.Image
                source={require("../../assets/images/visualizer.png")}
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
        </S.VisualizerContainer>
      </ScrollView>
    </View>
  );
};

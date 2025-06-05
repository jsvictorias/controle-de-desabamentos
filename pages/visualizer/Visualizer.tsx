import { AccordionComponent } from "@/components/accordion/Accordion";
import { MenuBar } from "@/components/menubar/MenuBar";
import { getLocations } from "@/services/dataService";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import * as S from "./styles";

export const Visualizer = () => {
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

  useEffect(() => {
    const loadLocations = async () => {
      const savedLocations = await getLocations();
      setLocations(savedLocations);
    };
    loadLocations();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MenuBar />
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}
      >
        <S.VisualizerContainer>
          <S.VisualizerTitle>
            Visualização dos Principais Riscos
          </S.VisualizerTitle>

          {locations.length > 0 ? (
            locations.map((location, index) => (
              <View key={index} style={{ marginBottom: 20, width: "80%", marginTop: 40 }}>
                <AccordionComponent title={location}>
                  <Text style={{ marginBottom: 5 }}>
                    última atualização: 1min
                  </Text>
                </AccordionComponent>
              </View>
            ))
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

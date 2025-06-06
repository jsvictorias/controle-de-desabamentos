import { saveFormData } from "@/services/dataService";
import { useState } from "react";

export const useCadastroForm = () => {
  const [formData, setFormData] = useState({
    endereco: "",
    regiao: "",
    terrenoOutro: "",
    usoSoloOutro: "",
    distanciaConstrucao: "",
  });

  const [otherOptions, setOtherOptions] = useState({
    terreno: false,
    usoSolo: false,
    construcao: false,
  });

  const toggleOption = (key: keyof typeof otherOptions) => {
    setOtherOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      endereco: "",
      regiao: "",
      terrenoOutro: "",
      usoSoloOutro: "",
      distanciaConstrucao: "",
    });
    setOtherOptions({
      terreno: false,
      usoSolo: false,
      construcao: false,
    });
  };

  const handleSubmit = async () => {
    const dataToSave = {
      ...formData,
      otherOptions,
    };

    try {
      await saveFormData(dataToSave);
      resetForm();
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Ocorreu um erro ao salvar os dados.");
    }
  };

  return {
    formData,
    otherOptions,
    handleInputChange,
    toggleOption,
    handleSubmit,
  };
};

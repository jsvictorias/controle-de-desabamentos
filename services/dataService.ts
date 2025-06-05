import { getFromStorage, saveToStorage } from "@/utils/storage";

export type FormData = {
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

export const saveFormData = async (data: Omit<FormData, "createdAt">) => {
  const dataWithTimestamp = {
    ...data,
    createdAt: new Date(),
  };
  const existingData = await getFormData();
  const newData = [...existingData, dataWithTimestamp];
  await saveToStorage("formDataCollection", newData);
};

export const getFormData = async (): Promise<FormData[]> => {
  const data = await getFromStorage("formDataCollection");
  return data || [];
};
export const getLocations = async (): Promise<string[]> => {
  const formDataCollection = await getFormData();
  const locations = Array.from(
    new Set(formDataCollection.map((item) => item.endereco))
  );
  return locations;
};

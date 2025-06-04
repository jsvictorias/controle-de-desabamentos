import { Welcome } from "@/pages/welcome/Welcome";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Welcome />
    </View>
  );
}

import { Actions } from "@/pages/actions/Actions";
import { History } from "@/pages/history/History";
import { Cadastro } from "@/pages/cadastro/Cadastro";
import { Visualizer } from "@/pages/visualizer/Visualizer";
import { Welcome } from "@/pages/welcome/Welcome";
import { AppStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Actions" component={Actions} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Visualizer" component={Visualizer} />
      </Stack.Navigator>
    </PaperProvider>
  );
}

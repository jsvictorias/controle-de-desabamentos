import { Cadastro } from "@/pages/cadastro/Cadastro";
import { Login } from "@/pages/login/Login";
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </PaperProvider>
  );
}

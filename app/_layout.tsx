import { Actions } from "@/pages/actions/Actions";
import { Cadastro } from "@/pages/cadastro/Cadastro";
import { History } from "@/pages/history/History";
import { Home } from "@/pages/home/Home";
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Actions" component={Actions} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </PaperProvider>
  );
}

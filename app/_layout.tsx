import { Login } from "@/pages/login/Login";
import { Welcome } from "@/pages/welcome/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

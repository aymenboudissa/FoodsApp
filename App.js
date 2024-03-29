import MainNavigation from "./components/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardScreen from "./screens/OnBoardScreen";
import BottomNavigator from "./components/BottomBar";
import Detail from "./screens/Detail";
import COLORS from "./consts/colors";
import Login from "./components/Auth/Login";

import SignUp from "./components/Auth/SignUp";

import PrivateRoot from "./components/PrivateRoot";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="BoardScreen" component={PrivateRoot} />
        <Stack.Screen name="HomeBottom" component={BottomNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

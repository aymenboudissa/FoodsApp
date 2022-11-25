import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NavBar from "./NavBar";
import BottomBar from "../components/BottomBar";
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          header: ({ navigation }) => (
            <NavBar navigation={navigation} main={true} />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen name="BottomBar" component={BottomBar}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;

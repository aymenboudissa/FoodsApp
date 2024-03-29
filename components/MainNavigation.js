import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomBar";
import Detail from "../screens/Detail";
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <React.Fragment>
      <BottomNavigator />
    </React.Fragment>
  );
};

export default MainNavigation;

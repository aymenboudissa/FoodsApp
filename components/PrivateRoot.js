import React from "react";
import { useAuth } from "./Auth/useAuth";
import BottomBar from "./BottomBar";
import Login from "./Auth/Login";
const PrivateRoot = ({ navigation }) => {
  const user = useAuth();

  return user ? <BottomBar /> : <Login />;
};

export default PrivateRoot;

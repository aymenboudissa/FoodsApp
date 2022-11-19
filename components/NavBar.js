import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import User from "./User";
const NavBar = ({ navigation, main }) => {
  return <SafeAreaView>{main ? <User /> : <View></View>}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#22333b",
  },
  logo: {
    width: 130,
    height: 50,
  },
});

export default NavBar;

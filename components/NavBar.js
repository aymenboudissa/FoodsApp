import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import User from "./User";
const NavBar = ({ navigation, main }) => {
  return (
    <SafeAreaView>
      {main ? (
        <User />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name={"chevron-back"} size={40} color={"black"} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
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
});

export default NavBar;

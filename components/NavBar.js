import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const NavBar = ({ navigation, main }) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.container}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <TouchableOpacity>
            <Icon name={"search-outline"} size={30} color={"#fff"} />
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
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
    backgroundColor: "#000814",
  },
  logo: {
    width: 130,
    height: 50,
  },
});

export default NavBar;

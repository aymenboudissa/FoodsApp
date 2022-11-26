import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text style={styles.load}>Loading</Text>
      <Image style={styles.image} source={require("../assets/hamburger.png")} />
      <Image style={styles.image} source={require("../assets/hamburger.png")} />
      <Image style={styles.image} source={require("../assets/hamburger.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  load: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
});
export default Loading;

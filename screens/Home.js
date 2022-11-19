import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Catagories from "../components/Catagories";
const Home = () => {
  return (
    <View style={styles.container}>
      <Catagories />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;

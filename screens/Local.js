import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Local = () => {
  return (
    <View style={styles.container}>
      <Text>LocalMall</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Local;

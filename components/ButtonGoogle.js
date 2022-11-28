import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {} from "@react-native-firebase/app";
const ButtonGoogle = ({ navigation }) => {
  return (
    <View style={[styles.btnDisplay, { marginTop: 90 }]}>
      <TouchableOpacity>
        <View style={[styles.btnCheckOut, { backgroundColor: "#ECECEC" }]}>
          <Image
            style={styles.iconGoogle}
            source={require("../../assets/logo-google.png")}
          />
          <Text style={[{ fontSize: 16 }, { fontWeight: "400" }]}>
            Continue With Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btnCheckOut: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 50,
    width: 300,
    margin: 10,
    borderRadius: 20,
  },
  btnDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconGoogle: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
export default ButtonGoogle;

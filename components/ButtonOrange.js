import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const windowWidth = Dimensions.get("screen");

const ButtonOrange = ({ title }) => {
  return (
    <View style={styles.btnDisplay}>
      <TouchableOpacity>
        <View style={styles.btnCheckOut}>
          <Text style={styles.btn}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btnCheckOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8938",
    height: 50,
    width: 250,
    margin: 10,
    borderRadius: 20,
  },
  btnDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
export default ButtonOrange;

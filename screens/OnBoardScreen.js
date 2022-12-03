import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: "100%",
            resizeMode: "contain",
            top: -150,
          }}
          source={require("../assets/onboardImage.png")}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text
            style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: "center",
              color: "#908e8c",
            }}
          >
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <View style={style.btnDisplay}>
          <TouchableOpacity onPress={() => navigation.navigate("BoardScreen")}>
            <View style={style.btnCheckOut}>
              <Text style={style.btn}>GET STARTED</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#F9813A",
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#908e8c",
    marginHorizontal: 5,
  },
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

export default OnBoardScreen;

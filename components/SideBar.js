import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS, { Colors } from "../consts/colors";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../config";
const SideBar = ({ navigation }) => {
  const logOut = () => {
    signOut(auth).then(() => {
      console.log("logout");
    });
    navigation.navigate("Login");
  };
  const [active, setActive] = React.useState("Home");
  const ButtonBar = ({ text, name, fonction }) => {
    let backgroundColor;
    if (text !== "Logout") {
      backgroundColor = active == text ? "#FF6912" : "#F9813A";
    }
    // () => setActive(text);
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            fonction;
            setActive(text);
          }}
        >
          <View
            style={[
              styles.ButtonStyle,
              { backgroundColor },
              {
                margin: 10,
                marginLeft: 0,
                width: 180,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
              },
            ]}
          >
            {text !== "Logout" ? (
              <Icon
                style={[styles.icon, { fontSize: 25 }]}
                color={"white"}
                name={name}
              />
            ) : (
              <Icon1
                style={[styles.icon, { fontSize: 25 }]}
                color={"white"}
                name={name}
              />
            )}
            <Text style={[styles.colorWhite, { fontWeight: "700" }]}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayFlex}>
        <Image style={styles.logo} source={require("../assets/pizzeria.jpg")} />
        <View>
          <Text
            style={[styles.colorWhite, { fontWeight: "600", fontSize: 18 }]}
          >
            EateMe
          </Text>
          <Text style={[styles.colorWhite, { fontWeight: "300" }]}>
            View your profile
          </Text>
        </View>
      </View>
      <View style={(styles.displayColumn, { flexGrow: 1, marginTop: 30 })}>
        <ButtonBar text={"Home"} name={"home-outline"} />
        <ButtonBar text={"My Wallet"} name={"wallet-outline"} />
        <ButtonBar text={"Notification"} name={"notifications-outline"} />
        <ButtonBar text={"Settings"} name={"settings-outline"} />
      </View>
      <View>
        <ButtonBar text={"Logout"} name={"logout"} fonction={logOut} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  displayColumn: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginRight: 10,
  },
  ButtonStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // zIndex: -1,
    // flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
    backgroundColor: COLORS.primary,
  },
  displayFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 9,
    borderRadius: 10,
  },
  colorWhite: {
    color: "white",
  },
});
export default SideBar;

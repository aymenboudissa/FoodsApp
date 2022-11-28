import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonOrange from "../ButtonOrange";
import COLORS from "../../consts/colors";
const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [invalid, setInvalid] = React.useState(null);
  const [hide, setHide] = React.useState(true);

  React.useEffect(() => {
    if (userEmail) {
      if (!userEmail.includes("@") || !userEmail.includes(".")) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    }
  }, [userEmail]);

  const color = invalid ? "red" : "";
  const Display = invalid ? "block" : "none";
  return (
    <View style={styles.container}>
      <View style={[styles.headerText, styles.DisplayColumn]}>
        <Text style={styles.fontBold}>Let's Sign You In</Text>
        <Text style={styles.textMuet}>Welcome back,you've been missed</Text>
      </View>
      <View style={[styles.DisplayColumn, styles.ContentInput]}>
        <View style={styles.HeaderInput}>
          <Text style={[styles.label, styles.textMuet]}>Email</Text>
          <Text style={[invalid ? styles.invalid : { display: "none" }]}>
            Invalid Email
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setUserEmail}
          value={userEmail}
        />
        {invalid === null && <Icon name="checkcircleo" style={styles.icon} />}
        {invalid === false && (
          <Icon
            name="checkcircleo"
            style={[styles.icon, { color: "green", fontWeight: "bold" }]}
          />
        )}
        {invalid && (
          <Icon name="closecircleo" style={[styles.icon, { color: "red" }]} />
        )}
      </View>
      <View style={[styles.DisplayColumn, styles.ContentInput]}>
        <View style={styles.HeaderInput}>
          <Text style={[styles.label, styles.textMuet]}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setUserPassword}
          value={userPassword}
          secureTextEntry={hide}
        />

        {hide ? (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHide((prev) => !prev)}
          >
            <Icon1 name="eye-off" style={{ fontSize: 17 }} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHide((prev) => !prev)}
          >
            <Icon1 name="eye" style={{ fontSize: 17 }} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.btnDisplay}>
        <TouchableOpacity>
          <View style={styles.btnCheckOut}>
            <Text style={styles.btn}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.DisplayFlex}>
        <Text style={styles.textMuet}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    padding: 25,
  },
  fontBold: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textMuet: {
    color: "#7D7D7D",
    fontSize: 16,
  },
  DisplayColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    marginBottom: 90,
  },

  HeaderInput: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invalid: {
    color: "red",
    fontWeight: "600",
  },
  input: {
    height: 45,
    width: 300,
    paddingLeft: 20,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  ContentInput: {
    position: "relative",
  },
  icon: {
    top: 55,
    right: -25,
    position: "absolute",
    transform: [{ translateX: -50 }],
    fontSize: 17,
  },
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
  btn: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  sign: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  DisplayFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconGoogle: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
export default Login;

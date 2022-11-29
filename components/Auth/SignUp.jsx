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
import ButtonGoogle from "../ButtonGoogle";
import { auth, db } from "../../config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import ToastManager, { Toast } from "toastify-react-native";
const SignUp = ({ navigation }) => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [invalidEmail, setInvalidEmail] = React.useState(null);

  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [hide, setHide] = React.useState(true);

  React.useEffect(() => {
    if (userEmail) {
      if (!userEmail.includes("@") || !userEmail.includes(".")) {
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
    }

    if (userPassword) {
      if (userPassword.length < 9) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);
      }
    }
  }, [userEmail, userName, userPassword]);
  const CreateUser = async () => {
    await createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        Toast.success("User account created & signed in!");
        setTimeout(() => {
          navigation.navigate("HomeBottom");
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Toast.warn("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Toast.error("That email address is invalid!");
        }
      });
    // updateProfile(auth.currentUser, {
    //   displayName: userName,
    // });
    // const user = userCredential.user;
    // const formDataCopy = {
    //   displayName: userName,
    //   email: userEmail,
    //   password: userPassword,
    // };
    // delete formDataCopy.password;
    // formDataCopy.timestamp = serverTimestamp();
    // await setDoc(doc(db, "users", user.uid), formDataCopy);
  };
  const color = invalidEmail ? "red" : "";
  const Display = invalidEmail ? "block" : "none";

  return (
    <View style={styles.container}>
      <ToastManager />
      <View style={[styles.headerText, styles.DisplayColumn]}>
        <Text style={styles.fontBold}>Getting Started</Text>
        <Text style={styles.textMuet}>Create an account to continue!</Text>
      </View>

      {/* starte input of email */}
      <View style={[styles.DisplayColumn, styles.ContentInput]}>
        <View style={styles.HeaderInput}>
          <Text style={[styles.label, styles.textMuet]}>Email</Text>
          <Text
            style={[invalidEmail ? styles.invalidEmail : { display: "none" }]}
          >
            Invalid Email
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setUserEmail}
          value={userEmail}
        />
        {invalidEmail === null && (
          <Icon name="checkcircleo" style={styles.icon} />
        )}
        {invalidEmail === false && (
          <Icon
            name="checkcircleo"
            style={[styles.icon, { color: "green", fontWeight: "bold" }]}
          />
        )}
        {invalidEmail && (
          <Icon name="closecircleo" style={[styles.icon, { color: "red" }]} />
        )}
      </View>
      {/* starte input of name */}
      <View style={[styles.DisplayColumn, styles.ContentInput]}>
        <View style={styles.HeaderInput}>
          <Text style={[styles.label, styles.textMuet]}>Name</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
        />

        <Icon name="checkcircleo" style={styles.icon} />
      </View>

      {/* starte input of password */}
      <View style={[styles.DisplayColumn, styles.ContentInput]}>
        <View style={styles.HeaderInput}>
          <Text style={[styles.label, styles.textMuet]}>Password</Text>
          <Text
            style={[
              invalidPassword ? styles.invalidEmail : { display: "none" },
            ]}
          >
            Password must be 9 characters
          </Text>
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
        <TouchableOpacity
          onPress={
            !invalidEmail && invalidPassword
              ? () => setInvalidEmail(true)
              : CreateUser
          }
        >
          <View
            style={[
              styles.btnCheckOut,
              !invalidEmail && invalidPassword
                ? { backgroundColor: COLORS.primaryClaire }
                : { backgroundColor: COLORS.primary },
            ]}
          >
            <Text style={styles.btn}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.DisplayFlex}>
        <Text style={styles.textMuet}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.sign}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <ButtonGoogle navigation={navigation} />
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
  invalidEmail: {
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
export default SignUp;

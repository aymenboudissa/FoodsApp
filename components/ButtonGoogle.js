import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../consts/colors";
import { auth } from "../config";
import { Toast } from "toastify-react-native";

// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// const provider = new GoogleAuthProvider();
const ButtonGoogle = ({ navigation }) => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "88524351015-uk763s0gk0h8ss28k1hijv8q18o6tccv.apps.googleusercontent.com",
  //   });
  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   const user_sign_in = auth().signInWithCredential(googleCredential);
  //   user_sign_in
  //     .the((user) => {
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <View style={[styles.btnDisplay, { marginTop: 90 }]}>
      <TouchableOpacity>
        <View style={[styles.btnCheckOut, { backgroundColor: "#ECECEC" }]}>
          <Image
            style={styles.iconGoogle}
            source={require("../assets/logo-google.png")}
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

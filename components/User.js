import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const User = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>Hello, Aymen</Text>
          <Text style={styles.text2}>What do you want today</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.image} source={require("../assets/user.jpg")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ABAAA9",
  },
  container: {
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});

export default User;

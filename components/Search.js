import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Search = () => {
  const [text, setText] = React.useState(null);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.form}>
          <TextInput
            placeholder={"Search for food"}
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
        </View>
        <TouchableOpacity
          style={styles.iconSearch}
          onPress={() => {
            onSubmit(text);
          }}
        >
          <Icon name={"search-outline"} size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.filter}>
        <Image
          style={styles.Iconparametre}
          source={require("../assets/parametre.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  filter: {
    backgroundColor: "#FDC057",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    fontWeight: "bold",
  },
  Iconparametre: {
    width: 30,
    height: 30,
  },
  input: {
    width: 270,
    height: 40,
    paddingLeft: 45,
    backgroundColor: "#E9E9E9",
  },
  container: {
    marginTop: 90,
    padding: 0,
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  form: {
    flexBasis: "auto",
    flexGrow: 1,
    paddingRight: 8,
    position: "relative",
  },
  iconSearch: {
    position: "absolute",
    left: 15,
    bottom: 5,
  },
});
export default Search;

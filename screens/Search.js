import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getFoods } from "../services/services";
import Icon from "react-native-vector-icons/Ionicons";
import List from "../components/List";
import Loading from "../components/Loading";
const Search = ({ navigation }) => {
  const [text, setText] = React.useState(null);
  const [foods, setFoods] = React.useState();
  const [loaded, setLoaded] = React.useState();
  const onSubmit = (query) => {
    setFoods(null);
    setText(null);
    setLoaded(false);
    getFoods(text)
      .then((food) => {
        setFoods(food);
      })
      .finally(() => {
        setLoaded(true);
      });
  };

  return (
    <React.Fragment>
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
            onPress={() => onSubmit(text)}
          >
            <Icon name={"search-outline"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>

      {foods && foods.length > 0 && (
        <List content={foods} navigattion={navigation} />
      )}

      {foods && foods.length === 0 && (
        <View style={[styles.empty, { paddingTop: 20 }]}>
          <Text>No results matching your criteria</Text>
          <Text>Try different keywords</Text>
        </View>
      )}
      {!foods && (
        <View style={styles.empty}>
          <Text>Type something to start searching</Text>
        </View>
      )}
      {loaded === false && <Loading />}
    </React.Fragment>
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
    width: 350,
    height: 50,
    paddingLeft: 45,
    backgroundColor: "#E9E9E9",
  },
  container: {
    // marginTop: 90,
    padding: 0,
    paddingTop: 20,
    marginTop: 20,
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
    bottom: 9,
  },
  empty: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Search;

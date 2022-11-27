import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Favoris = () => {
  const [FavorisID, setFavorisID] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setLoaded(false);
    getData();
    setLoaded(true);
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("favoris");
      const favoris = JSON.parse(value);
      console.log(favoris);
      if (favoris !== null) {
        setFavorisID(favoris);
      }
    } catch (e) {
      // error reading value
    }
  };
  const getIds = (values) => {
    let array = [];

    return <Text style={styles.text}>{values.id}</Text>;
  };

  return (
    <View style={styles.container}>
      {/* {FavorisID && FavorisID.length > 0 && ()} */}
      {!loaded && <Loading />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
export default Favoris;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
const Favoris = () => {
  const [FavorisID, setFavorisID] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setLoaded(false);
  }, []);

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

import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import Catagories from "../components/Catagories";
import List from "../components/List";
import Loading from "../components/Loading";
import { getBestFood, getCategory, getFoods } from "../services/services";
import User from "../components/User";
const Home = ({ navigation }) => {
  const [foods, setFoods] = React.useState();

  const [selectedId, setSelectedId] = React.useState(null);

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (selectedId !== null) {
      setFoods(null);
      setLoaded(false);
      getCategory(selectedId)
        .then((food) => {
          setFoods(food);
        })
        .finally(() => {
          setLoaded(true);
        });
    } else {
      getBestFood()
        .then((best) => {
          setFoods(best);
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, [selectedId]);
  return (
    <View style={styles.container}>
      <User />
      <Catagories selectedId={selectedId} setSelectedId={setSelectedId} />
      {!loaded && <Loading />}
      <List content={foods} navigattion={navigation} categorieID={selectedId} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "#FBB403",
  },
});
export default Home;

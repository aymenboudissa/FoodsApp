import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Catagories from "../components/Catagories";
import List from "../components/List";
import Search from "../components/Search";
import { getBestFood, getCategory, getFoods } from "../services/services";
const Home = () => {
  const [foods, setFoods] = React.useState();

  const [selectedId, setSelectedId] = React.useState(null);
  const [text, setText] = React.useState(null);

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
    } else if (text) {
      setFoods(null);
      setLoaded(false);
      getFoods(text)
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
  }, [selectedId, text]);
  return (
    <View style={styles.container}>
      <Search text={text} setText={setText} />
      <Catagories selectedId={selectedId} setSelectedId={setSelectedId} />
      {!loaded && <ActivityIndicator size={"large"} />}
      <List content={foods} />
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

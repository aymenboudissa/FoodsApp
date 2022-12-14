import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Food from "../components/favoris/Food";
import Loading from "../components/Loading";
import { auth, db } from "../config";
const Favoris = () => {
  const [FavorisID, setFavorisID] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [meals, setMeals] = React.useState([]);
  React.useEffect(() => {
    setLoaded(false);
    async function fetchUserListings() {
      const listingRef = collection(db, "listingsFavoris");

      const q = query(listingRef, where("useRef", "==", auth.currentUser.uid));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setMeals(listings);
    }
    fetchUserListings();
    setLoaded(true);
  }, [meals]);
  const getFoods = () => {
    let array = [];
    array = meals.map((food) => {
      return <Food food={food} />;
    });
    return array;
  };
  return (
    <View style={styles.container}>
      {meals && meals.length > 0 && getFoods()}
      {!loaded && <Loading />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
export default Favoris;

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Food from "../components/favoris/Food";
import Loading from "../components/Loading";
import { auth, db } from "../config";
import Icon from "react-native-vector-icons/AntDesign";
import COLORS from "../consts/colors";
import { SwipeListView } from "react-native-swipe-list-view";
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
  const deleteFromFavoris = async (id) => {
    await deleteDoc(doc(db, "listingsFavoris", id));
    const updateList = meals.filter((meal) => meal.id !== id);
    setMeals(updateList);
  };
  return (
    <View style={styles.container}>
      {meals && meals.length > 0 && (
        <SwipeListView
          data={meals}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{
            marginTop: 10,
            paddingHorizontal: 15,
            paddingBottom: 30,
          }}
          disableRightSwipe={true}
          rightOpenValue={-75}
          renderItem={(data) => <Food food={data.item} setMeals={setMeals} />}
          renderHiddenItem={(data) => (
            <View
              style={{
                display: "flex",
                marginHorizontal: 25,
                marginVertical: 10,
                height: "84%",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundColor: COLORS.primary,
              }}
            >
              <Icon
                name="delete"
                style={{ marginRight: 17 }}
                color={"white"}
                size={40}
                onPress={() => deleteFromFavoris(data.item.id)}
              />
            </View>
          )}
        />
      )}
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

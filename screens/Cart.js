import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Food from "../components/cart/Food";
import { getFoodLimit } from "../services/services";
import Loading from "../components/Loading";
import ButtonOrange from "../components/ButtonOrange";
import { auth, db } from "../config";
import { collection, getDocs, query, where } from "firebase/firestore";
const Cart = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [totale, setTotale] = React.useState(0);
  const [meals, setMeals] = React.useState([]);
  const calculateSumMontant = () => {
    let sumMontant = 0;
    meals.forEach((meals) => {
      sumMontant += meals.data.qte * meals.data.price;
    });
    return sumMontant;
  };
  React.useEffect(() => {
    setLoaded(false);
    async function fetchUserListings() {
      const listingRef = collection(db, "listingsCart");

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
      return <Food food={food} setMeals={setMeals} />;
    });
    return array;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {meals && meals.length > 0 && getFoods()}
        <View style={styles.totale}>
          <Text style={styles.fontBold}>Totale Price</Text>
          <Text style={styles.priceFood}>${calculateSumMontant()}</Text>
        </View>
      </View>
      <ButtonOrange title={"CHECKOUT"} />
      {!loaded && Loading}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
  },
  totale: {
    margin: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontBold: {
    fontWeight: "bold",
    fontSize: 16,
  },

  priceFood: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default Cart;

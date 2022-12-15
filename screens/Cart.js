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
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/AntDesign";
import COLORS from "../consts/colors";
import { async } from "@firebase/util";
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
  const deleteFromCart = async (id) => {
    await deleteDoc(doc(db, "listingsCart", id));
    const updateList = meals.filter((meal) => meal.id !== id);
    setMeals(updateList);
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

  const getFoods = (item) => {
    return console.log(item);
  };

  return (
    <>
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
                  margin: 10,
                  height: "82%",
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
                  onPress={() => deleteFromCart(data.item.id)}
                />
              </View>
            )}
          />
        )}
        {!loaded && <Loading />}
      </View>
      <View style={styles.footerCart}>
        <View style={styles.totale}>
          <Text style={styles.fontBold}>Totale Price</Text>
          <Text style={styles.priceFood}>${calculateSumMontant()}</Text>
        </View>
        <ButtonOrange title={"CHECKOUT"} />
      </View>
    </>
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
  footerCart: {
    padding: 5,
    borderColor: "black",
    borderWidth: 0.1,
    elevation: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
export default Cart;

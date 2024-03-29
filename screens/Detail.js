import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getProductByID } from "../services/services";
import Icon from "react-native-vector-icons/MaterialIcons";
import { auth, db } from "../config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
// import { useFoods } from "../contexts/FoodProvider";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const Detail = ({ route }) => {
  const [food, setFood] = React.useState();
  const [loaded, setLoaded] = React.useState(false);

  const foodID = route.params.foodID;
  const [favoris, setFavoris] = React.useState(false);
  const [cart, setCart] = React.useState(false);

  const { FavorisID, setFavorisID } = React.useState();
  const { ref, setRef } = React.useState();
  React.useEffect(() => {
    setFood({});
    setFavoris(false);
    getProductByID(foodID)
      .then((food) => {
        setFood(food[0]);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [foodID]);
  const getValueRandom = () => {
    const index = Math.floor(Math.random() * 400);
    return index;
  };
  const addToFirebase = async (table, state, setState) => {
    setState((favor) => !favor);

    if (!state) {
      const formDataCopy =
        table === "listingsFavoris"
          ? {
              idMeal: foodID,
              title: food.strMeal,
              image: food.strMealThumb,
              price: getValueRandom(),
              category: food.strCategory,

              useRef: auth.currentUser.uid,
            }
          : {
              idMeal: foodID,
              title: food.strMeal,
              image: food.strMealThumb,
              price: getValueRandom(),
              category: food.strCategory,
              qte: 1,
              useRef: auth.currentUser.uid,
            };
      await addDoc(collection(db, table), formDataCopy);
    } else {
      const listingRef = collection(db, table);
      const q = query(
        listingRef,
        where("useRef", "==", auth.currentUser.uid),
        where("idMeal", "==", foodID)
      );
      const querySnap = await getDocs(q);
      querySnap.forEach((doca) => {
        return deleteDoc(doc(db, table, doca.id));
      });
    }
  };

  return (
    <React.Fragment>
      {loaded && (
        <View style={styles.container}>
          <View style={styles.ImageView}>
            <Image
              style={styles.imageFood}
              source={{
                uri: food.strMealThumb,
              }}
            />
          </View>

          <View style={styles.foodDesc}>
            <View style={styles.foodTitle}>
              <Text style={[styles.colorWhite, styles.title]}>
                {food.strMeal}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  addToFirebase("listingsFavoris", favoris, setFavoris)
                }
              >
                {favoris ? (
                  <Icon name="favorite" style={styles.icon} color={"#FF8938"} />
                ) : (
                  <Icon
                    name="favorite-border"
                    style={styles.icon}
                    color={"#FF8938"}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={[styles.colorWhite, styles.desc]}>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum{" "}
            </Text>
            <TouchableOpacity
              style={styles.btnCart}
              onPress={() => addToFirebase("listingsCart", cart, setCart)}
            >
              <Text style={styles.colorYellow}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {!loaded && (
        <View style={styles.loading}>
          <Text style={styles.load}>Loading</Text>
          <Image
            style={styles.image}
            source={require("../assets/hamburger.png")}
          />
          <Image
            style={styles.image}
            source={require("../assets/hamburger.png")}
          />
          <Image
            style={styles.image}
            source={require("../assets/hamburger.png")}
          />
        </View>
      )}
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  load: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  imageFood: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
  icon: {
    fontSize: 30,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 20,
  },
  foodDesc: {
    display: "flex",
    flexDirection: "column",
    height: 350,
    borderRadius: 50,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 25,
    backgroundColor: "#FF8938",
  },
  foodTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorWhite: {
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  btnCart: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 20,
  },
  colorYellow: {
    color: "#FF8938",
    fontSize: 16,
    fontWeight: "700",
  },
  ImageView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    // backgroundColor: "red",
  },
});
export default Detail;

import { doc, increment, updateDoc } from "firebase/firestore";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { db } from "../../config";
import { SwipeListView } from "react-native-swipe-list-view";
const Food = ({ food, setMeals }) => {
  const addQte = async (id) => {
    setMeals((meals) => {
      return meals.map((meal) => {
        return meal.id == id
          ? { ...meal, data: { ...meal.data, qte: meal.data.qte + 1 } }
          : meal;
      });
    });
    const docRef = doc(db, "listingsCart", id);
    await updateDoc(docRef, {
      qte: increment(1),
    });
  };
  const DimuneurQte = async (id, qte) => {
    setMeals((meals) => {
      return meals.map((meal) => {
        return meal.id == id && meal.data.qte > 1
          ? { ...meal, data: { ...meal.data, qte: meal.data.qte - 1 } }
          : meal;
      });
    });
    if (qte > 1) {
      const docRef = doc(db, "listingsCart", id);
      await updateDoc(docRef, {
        qte: increment(-1),
      });
    }
  };

  return (
    <View style={styles.containerFood}>
      <View style={styles.foodDesc}>
        <Image
          style={styles.image}
          source={{
            uri: food.data.image,
          }}
        />
        <View>
          <Text style={[styles.titlePriceFood, styles.title]}>
            {food.data.title}
          </Text>
          <Text style={styles.countryFood}>{food.data.category}</Text>
          <Text style={styles.titlePriceFood}>${food.data.price}</Text>
        </View>
      </View>
      <View style={styles.Qte}>
        <Text style={styles.titlePriceFood}>{food.data.qte}</Text>
        <View style={styles.update}>
          <TouchableOpacity onPress={() => DimuneurQte(food.id, food.data.qte)}>
            <Icon name="remove-outline" style={styles.icon} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addQte(food.id)}>
            <Icon name="add" style={styles.icon} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    color: "white",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  containerFood: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 0.1,
    elevation: 2,
    // borderRadius: 10,
  },
  title: {
    width: 145,
  },
  foodDesc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Qte: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titlePriceFood: {
    fontWeight: "bold",
    fontSize: 16,
  },
  countryFood: {
    fontSize: 13,
    color: "#5E5F5F",
  },
  update: {
    marginTop: 7,
    display: "flex",
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FF8938",
    borderRadius: 18,
  },
});
export default Food;

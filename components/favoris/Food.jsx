import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Food = ({ food }) => {
  return (
    <View style={styles.containerFood}>
      <View style={styles.foodDesc}>
        <Image
          style={styles.image}
          source={{
            uri: food.data.image,
          }}
        />
        <View style={styles.mealAbout}>
          <Text style={[styles.titlePriceFood, styles.title]}>
            {food.data.title}
          </Text>
          <Text style={styles.countryFood}>{food.data.category}</Text>
          <Text style={styles.titlePriceFood}>${food.data.price}</Text>
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
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 30,
  },
  containerFood: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    width: "90%",
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 0.1,
    elevation: 2,
    backgroundColor: "white",
    // borderRadius: 10,
  },
  foodDesc: {
    display: "flex",
    flexDirection: "row",
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
    width: 90,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FF8938",
    borderRadius: 18,
  },
  mealAbout: {
    // backgroundColor: "#5E5F5F",
    width: "65%",
  },
});
export default Food;

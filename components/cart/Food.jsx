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
            uri: food.img,
          }}
        />
        <View>
          <Text style={[styles.titlePriceFood, styles.title]}>{food.name}</Text>
          <Text style={styles.countryFood}>{food.cuntry}</Text>
          <Text style={styles.titlePriceFood}>${food.price}</Text>
        </View>
      </View>
      <View style={styles.Qte}>
        <Text style={styles.titlePriceFood}>3</Text>
        <View style={styles.update}>
          <TouchableOpacity>
            <Icon name="remove-outline" style={styles.icon} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="add" style={styles.icon} size={30} />
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

    borderColor: "black",
    borderWidth: 0.1,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    width: 100,
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
    width: 90,
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

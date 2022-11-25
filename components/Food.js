import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const placeholderImage = require("../assets/image-no-available.png");
import { Rating } from "react-native-ratings";
const Food = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.itemImage}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{item.name}</Text>
          <Rating
            imageSize={15}
            count={5}
            isDisabled={true}
            startingValue={item.rate}
            ratingColor={"gold"}
          />
          <Text style={[styles.text, styles.price]}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemImage: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    padding: 10,
    position: "relative",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 0.5,
    marginRight: 5,
    marginBottom: 20,
    width: 170,
    height: 220,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    marginTop: 0,
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  price: {
    fontWeight: "bold",
  },
  info: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    marginTop: 10,
    width: 160,
    marginTop: 10,
    // backgroundColor: "red",
    bottom: 0,
  },
});
export default Food;

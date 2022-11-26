import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Food = () => {
  return (
    <View style={styles.containerFood}>
      <View style={styles.foodDesc}>
        <Image
          style={styles.image}
          source={{
            uri: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          }}
        />
        <View>
          <Text style={styles.titlePriceFood}>Meal Pizza</Text>
          <Text style={styles.countryFood}>Mixed Pizza</Text>
          <Text style={styles.titlePriceFood}>$8.30</Text>
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

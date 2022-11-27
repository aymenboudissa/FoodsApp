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
const Cart = () => {
  const [foods, setfoods] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    getFoodLimit()
      .then((food) => {
        setfoods(food);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  const getFoods = () => {
    let array = [];
    array = foods.map((food) => {
      return <Food food={food} />;
    });
    return array;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {foods && foods.length > 0 && getFoods()}
        <View style={styles.totale}>
          <Text style={styles.fontBold}>Totale Price</Text>
          <Text style={styles.priceFood}>$50</Text>
        </View>
      </View>
      <View style={styles.btnDisplay}>
        <TouchableOpacity>
          <View style={styles.btnCheckOut}>
            <Text style={styles.btn}>CHECKOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  btnCheckOut: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8938",
    height: 50,
    width: 250,
    margin: 10,
    borderRadius: 20,
  },
  btnDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  priceFood: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default Cart;

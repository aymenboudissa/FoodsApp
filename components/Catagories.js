import React, {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import items from "../services/DataCategory";
const Catagories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.card}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
  card: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Catagories;

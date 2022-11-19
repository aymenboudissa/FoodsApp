import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import items from "../services/DataCategory";
const Catagories = () => {
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item, backgroundColor]}>
        <View style={styles.viewImage}>
          <Image style={styles.image} source={item.image} />
        </View>
        <Text style={[styles.text, textColor]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = React.useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FDC057" : "#FFE1AE";
    const color = item.id === selectedId ? "white" : "#E68338";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewImage: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  container: {
    marginTop: 10,
    flex: 1,

    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
  },
  list: {
    flex: 1,
  },
  item: {
    margin: 10,
    width: 120,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Catagories;

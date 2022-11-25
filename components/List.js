import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Food from "./Food";
const List = ({ content }) => {
  const renderItem = ({ item }) => {
    return <Food item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={content}
        style={styles.list}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",

    // paddingTop: 20,
    flex: 1,
  },
  list: {
    padding: 5,
  },
});
export default List;

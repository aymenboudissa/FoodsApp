import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const FoodsContext = createContext();
const FoodProdvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  const findFoods = async () => {
    const result = await AsyncStorage.getItem("favorisID");
    if (result !== null) setFoods(JSON.parse(result));
  };

  useEffect(() => {
    findFoods();
  }, []);

  return (
    <FoodsContext.Provider value={{ foods, setFoods, findFoods }}>
      {children}
    </FoodsContext.Provider>
  );
};

export const useFoods = () => useContext(FoodsContext);

export default FoodProdvider;

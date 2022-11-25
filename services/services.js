import axios from "axios";
import items from "./DataCategory";

const apiUrl = "https://ig-food-menus.herokuapp.com/";
export const getBestFood = async () => {
  const resp = await axios.get(apiUrl + "best-foods");
  return resp.data;
};
export const getCategory = async (id) => {
  const category = items[id - 1].name.toLowerCase();
  const resp = await axios.get(apiUrl + category);
  return resp.data;
};
export const getFoods = async (food) => {
  const resp = await axios.get(apiUrl + `our-foods?name_like=${food}`);
  return resp.data;
};

import axios from "axios";
export const getCategories = async () => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return resp.data.categories;
};
export const getProducts = async () => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
  );
  return resp.data.meals;
};

export const getProductsByCategory = async (category) => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
  );
  return resp.data.meals;
};

export const getSearchByName = async (product) => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + product
  );
  return resp.data.meals;
};
export const getProductByID = async (id) => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  return resp.data.meals;
};

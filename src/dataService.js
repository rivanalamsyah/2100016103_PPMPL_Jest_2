// ! Dont change this file

const axios = require("axios");

const fetchProductsData = async (id) => {
  let productData = {};
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${id ?? ""}`
    );
    const { data } = response;
    productData = data;
  } catch (e) {
    console.log(e);
  }
  return productData;
};

const fetchCartsData = async (id) => {
  return null;
};

module.exports = { fetchProductsData, fetchCartsData };

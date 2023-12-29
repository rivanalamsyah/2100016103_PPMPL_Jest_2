// ! Dont change this file

const { fetchProductsData } = require("./dataService");
const {
  setProductsCards,
  convertToRupiah,
  countDiscount,
} = require("./dataUtils");

module.exports = {
  fetchProductsData,
  setProductsCards,
  convertToRupiah,
  countDiscount,
};

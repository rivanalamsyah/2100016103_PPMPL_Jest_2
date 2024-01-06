const convertToRupiah = (price) => {
  const convertedPrice = price * 15_436;
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(convertedPrice);
  return rupiah.toString();
};

const countDiscount = (price, discount) => {
  const discountAmount = price * (discount / 100);
  const discountedPrice = price - discountAmount;
  return parseFloat(discountedPrice.toFixed(4)); // Round the result to 4 decimal places
};

const setProductsCards = (products) => {
  const productsCards = products.map((product) => {
    return {
      price: convertToRupiah(product.price),
      after_discount: countDiscount(product.price, product.discountPercentage),
      image: product.thumbnail,
    };
  });
  return productsCards;
};

module.exports = { setProductsCards, convertToRupiah, countDiscount };
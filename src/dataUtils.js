// @ Try to check and change the return value of setProductsCards function
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

// ! Dont change this code
const convertToRupiah = (price) => {
  const convertedPrice = price * 15_436;
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(convertedPrice);
  return rupiah.toString();
};

const countDiscount = (price, discount) => {
  const discountPrice = price * (discount / 100);
  const afterDiscount = price - discountPrice;
  return afterDiscount;
};

module.exports = { setProductsCards, convertToRupiah, countDiscount };

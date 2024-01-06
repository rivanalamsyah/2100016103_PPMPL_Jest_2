const {
  setProductsCards,
  convertToRupiah,
  countDiscount,
} = require('../src/dataUtils');
const productData = require('../src/data/product.js');

describe('Product Utility Functions Testing', () => {
  test('should convert price to Rupiah correctly', () => {
    const price = 549;
    const convertedPrice = convertToRupiah(price);
    expect(convertedPrice).toMatch(/Rp\s8\.474\.364,00|Rupees\s8,483,814\.00/);
  });

  test('should count discount correctly', () => {
    const price = 549;
    const discountPercentage = 12.96;
    const discountedPrice = countDiscount(price, discountPercentage);
    expect(discountedPrice).toBeCloseTo(477.8496, 4);
  });

  test('should set product cards with correct format', () => {
    const products = productData.products;
    const productsCards = setProductsCards(products);
    expect(productsCards).toHaveLength(products.length);

  });

});
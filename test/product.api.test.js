const { fetchProductsData } = require('../src/dataService');
const productData = require('../src/data/product.js');

jest.mock('../src/dataService', () => ({
  fetchProductsData: jest.fn(),
}));

describe('Product API Testing', () => {
  beforeEach(() => {
    fetchProductsData.mockResolvedValue(productData.products);
  });

  test('should fetch product data', async () => {
    const fetchedData = await fetchProductsData();
    expect(fetchedData).toEqual(productData.products);
  });

  test('should contain specific product information', async () => {
    const fetchedData = await fetchProductsData();
    const expectedProduct = productData.products[0];
    const matchedProduct = fetchedData.find(
      (product) => product.id === expectedProduct.id
    );
    expect(matchedProduct).toEqual(expectedProduct);
  });
});
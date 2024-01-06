const { fetchCartsData } = require('../src/dataService');
const cartData = require("../src/data/cart.js");

jest.mock('../src/dataService', () => ({
  fetchCartsData: jest.fn(),
}));

describe('Cart API Testing', () => {
  beforeEach(() => {
    fetchCartsData.mockResolvedValue(cartData);
  });

  test('should compare the length of fetched carts data with total', async () => {
    const fetchedData = await fetchCartsData();
    expect(fetchedData.length).toBe(cartData.length);
  });
});

test('Training-jest', () => {
  expect(1 + 1).toBe(2);
});
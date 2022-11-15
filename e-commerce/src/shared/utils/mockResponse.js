import { faker } from "@faker-js/faker";

export const createMockRecords = (arg) => {
  const response = [];
  for (let i = 0; i < arg; i++) {
    let temp = {
      display_name: faker.commerce.productName(),
      in_stock: faker.random.numeric(),
      image_url: faker.image.food(640, 480, true),
      categories: `${faker.commerce.productMaterial()}, ${faker.commerce.product()}`,
      price:
        i % 2 === 0
          ? faker.commerce.price(500, 1000, 0, "$")
          : faker.commerce.price(100, 400, 0, "$"),
      discount: faker.commerce.price(0, 15, 0),
      color: faker.color.human(),
      seller_names: faker.company.name(),
      brand: faker.commerce.productMaterial(),
      description: faker.commerce.productDescription(),
      review: [],
      ratings: faker.commerce.price(0, 4, 0),
    };
    response.push(temp);
  }
  console.log(response);

  return response;
};

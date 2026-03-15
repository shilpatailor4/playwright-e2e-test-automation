import { faker } from "@faker-js/faker";

export const createRandomUser = () => {
  return {
    username: faker.person.fullName(),
    email: `automation.1${new Date().getTime()}.${faker.internet.email()}`,
    phone: faker.string.numeric(10), // Correct module is .phone
    password: faker.internet.password({ length: 12 }),
    address: faker.location.streetAddress(), // Correct module is .location
  };
};

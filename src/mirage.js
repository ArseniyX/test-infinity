import faker from 'faker';
import { createServer } from 'miragejs';

const createContactWithId = (id) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id,
    firstName,
    lastName,
    phoneNumber: faker.phone.phoneNumberFormat(5),
    emailAddress: faker.internet.exampleEmail(firstName, lastName),
    address: faker.address.streetAddress(),
    state: faker.address.stateAbbr(),
    zipCode: faker.address.zipCode('#####'),
  };
};

const getContactsByPage = (_, req) => {
  const { page } = req.queryParams;
  const pageInt = typeof page === 'undefined' ? 1 : parseInt(page, 10);

  return Array(20).fill(null).map((_, i) => {
    const id = ((pageInt - 1) * 20) + i + 1;
    return createContactWithId(id);
  });
};

export default function makeServer() {
  return createServer({
    routes() {
      this.get('/api/contacts', getContactsByPage);

      // These passthroughs are just so Mirage doesn't intercept a legitimate request from Codesandbox.
      this.passthrough('https://cdn.jsdelivr.net/**');
      this.passthrough('https://codesandbox.io/**');
      this.passthrough('https://unpkg.com/**');
    },

    timing: 1000,
  });
}

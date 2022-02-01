const frisby = require('frisby');
// const flipout = require('flipout');
const data = require('../data/data');

const backendURL = `https://testswithfrisbyjs.herokuapp.com/`;

const flipData = data.map(({ backend }) => ({
  backend: flipData(backend),
}));

describe('Deploy verify.', () => {
  it.skip('Check get method.', async () => {
    await frisby
      .get(backendURL)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        JSON.parse(body).forEach((item) => {
          expect(data).toContainEqual(item);
        });
      });
  });
});

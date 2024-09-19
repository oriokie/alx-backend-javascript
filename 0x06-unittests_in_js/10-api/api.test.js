const request = require('request');
const { expect } = require('chai');

describe('API', () => {
  const API_URL = 'http://localhost:7865';

  describe('Index page', () => {
    it('should return correct status code', (done) => {
      request.get(API_URL, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result', (done) => {
      request.get(API_URL, (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return correct status code when :id is a number', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result when :id is a number', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 when :id is NOT a number', (done) => {
      request.get(`${API_URL}/cart/hello`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available payments', () => {
    it('should return correct payment methods', (done) => {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('Login', () => {
    it('should welcome the user', (done) => {
      const options = {
        url: `${API_URL}/login`,
        json: { userName: 'Betty' },
      };
      request.post(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});

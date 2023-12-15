import httpStatus from 'http-status';
import supertest from 'supertest';
import { createProducts } from '../factories/product-factory';
import app from '@/app';

const server = supertest(app);

beforeAll(async () => {
  await createProducts();
});

describe('testing for product routes', () => {
  describe('tests for the GET/products route', () => {
    it('should respond with status 200 and objects containing arrays of products and side dishes', async () => {
      const { status, body } = await server.get('/');
      console.log(body);
      expect(status).toBe(httpStatus.OK);
    });
  });
});

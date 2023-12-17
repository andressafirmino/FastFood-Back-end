import httpStatus from 'http-status';
import supertest from 'supertest';
import { createProducts } from '../factories/product-factory';
import app from '@/app';
import prisma from '@/configs/database';

const server = supertest(app);

beforeAll(async () => {
  await createProducts();
});

afterAll(async () => {
  await prisma.product.deleteMany({});
  await prisma.sideDishe.deleteMany({});
});

describe('testing for product routes', () => {
  describe('tests for the GET/products route', () => {
    it('should respond with status 200 and objects containing arrays of products and side dishes', async () => {
      const { status, body } = await server.get('/');

      expect(status).toBe(httpStatus.OK);
      expect(body.categories).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            image: expect.any(String),
            category: expect.any(String),
          }),
        ]),
      );
      expect(body.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number),
            description: expect.any(String),
            image: expect.any(String),
            category: expect.any(String),
          }),
        ]),
      );
      expect(body.sideDish).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number),
            description: expect.any(String),
            image: expect.any(String),
            productId: null,
          }),
        ]),
      );
    });
  });
});

import supertest from 'supertest';
import httpStatus from 'http-status';
import app from '../src/app';

const server = supertest(app);

describe('Integration testing', () => {
  it('should respond status 200', async () => {
    const { status, text } = await server.get('/health');

    expect(status).toBe(httpStatus.OK);
    expect(text).toBe('Health check successful. Operating server.');
  });
});

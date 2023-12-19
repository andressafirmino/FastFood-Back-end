import express, { Request, Response, json } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import { paymentRouter, productRouter } from './routers';

const app = express();

app.use(cors());
app.use(json());

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send('Health check successful. Operating server.');
});
app.use('/', productRouter);
app.use('/payment', paymentRouter);

export default app;

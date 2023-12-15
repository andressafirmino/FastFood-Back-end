import express, { Request, Response, json } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';

const app = express();

app.use(cors());
app.use(json());

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send('Health check successful. Operating server.');
});

export default app;

import { Router } from 'express';
import { validateBody } from '@/middlewares/validation-middleware';
import { OrderSchema } from '@/schemas';

const paymentRouter = Router();

paymentRouter.post('/', validateBody(OrderSchema));

export { paymentRouter };

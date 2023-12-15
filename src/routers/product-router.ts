import { Router } from 'express';
import { productController } from '@/controllers';

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);

export { productRouter };

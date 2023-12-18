import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { productService } from '@/services';

async function getAllProducts(req: Request, res: Response) {
  const products = await productService.getAllProducts();
  res.status(httpStatus.OK).send(products);
}

async function getProductsByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const products = await productService.getProductsByCategory(category);
  res.status(httpStatus.OK).send(products);
}

export const productController = {
  getAllProducts,
  getProductsByCategory,
};

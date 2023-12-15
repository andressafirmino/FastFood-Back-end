import { productRepository } from '@/repositories';

async function getAllProducts() {
  return await productRepository.getAllProducts();
}

export const productService = {
  getAllProducts,
};

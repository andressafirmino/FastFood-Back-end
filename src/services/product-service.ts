import { productRepository } from '@/repositories';

async function getAllProducts() {
  return await productRepository.getAllProducts();
}

async function getProductsByCategory(category: string) {
  return await productRepository.getProductsByCategory(category.toUpperCase());
}

export const productService = {
  getAllProducts,
  getProductsByCategory,
};

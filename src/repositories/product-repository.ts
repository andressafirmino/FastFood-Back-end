import prisma from '@/configs/database';

async function getAllProducts() {
  const [categories, products, sideDish] = await prisma.$transaction([
    prisma.categories.findMany(),
    prisma.product.findMany(),
    prisma.sideDishe.findMany(),
  ]);
  return { categories, products, sideDish };
}

async function getProductsByCategory(category: string) {
  return await prisma.product.findMany({
    where: { category },
  });
}

export const productRepository = {
  getAllProducts,
  getProductsByCategory,
};

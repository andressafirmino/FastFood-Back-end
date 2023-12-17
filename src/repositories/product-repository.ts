import prisma from '@/configs/database';

async function getAllProducts() {
  const [categories, products, sideDish] = await prisma.$transaction([
    prisma.categories.findMany(),
    prisma.product.findMany(),
    prisma.sideDishe.findMany(),
  ]);
  return { categories, products, sideDish };
}

export const productRepository = {
  getAllProducts,
};

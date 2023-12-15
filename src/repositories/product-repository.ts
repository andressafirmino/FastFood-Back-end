import prisma from '@/configs/database';

async function getAllProducts() {
  const [products, sideDish] = await prisma.$transaction([prisma.product.findMany(), prisma.sideDishe.findMany()]);
  return { products, sideDish };
}

export const productRepository = {
  getAllProducts,
};

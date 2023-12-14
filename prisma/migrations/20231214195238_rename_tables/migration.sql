/*
  Warnings:

  - You are about to drop the `sideDishe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sideDishesOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sideDishe" DROP CONSTRAINT "sideDishe_productId_fkey";

-- DropForeignKey
ALTER TABLE "sideDishesOrder" DROP CONSTRAINT "sideDishesOrder_orderedProductId_fkey";

-- DropForeignKey
ALTER TABLE "sideDishesOrder" DROP CONSTRAINT "sideDishesOrder_sideDishesId_fkey";

-- DropTable
DROP TABLE "sideDishe";

-- DropTable
DROP TABLE "sideDishesOrder";

-- CreateTable
CREATE TABLE "SideDishe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "productId" INTEGER,

    CONSTRAINT "SideDishe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SideDishesOrder" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sideDishesId" INTEGER NOT NULL,
    "orderedProductId" INTEGER NOT NULL,

    CONSTRAINT "SideDishesOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SideDishe" ADD CONSTRAINT "SideDishe_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SideDishesOrder" ADD CONSTRAINT "SideDishesOrder_sideDishesId_fkey" FOREIGN KEY ("sideDishesId") REFERENCES "SideDishe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SideDishesOrder" ADD CONSTRAINT "SideDishesOrder_orderedProductId_fkey" FOREIGN KEY ("orderedProductId") REFERENCES "OrderedProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `isFinished` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `SideDishe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isFinished" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "Category" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SideDishe" ADD COLUMN     "image" TEXT NOT NULL;

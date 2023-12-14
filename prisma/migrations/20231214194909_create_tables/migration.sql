-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "observation" TEXT,
    "amount" INTEGER NOT NULL,
    "payment" TEXT NOT NULL,
    "client" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderedProduct" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OrderedProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sideDishe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "productId" INTEGER,

    CONSTRAINT "sideDishe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sideDishesOrder" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sideDishesId" INTEGER NOT NULL,
    "orderedProductId" INTEGER NOT NULL,

    CONSTRAINT "sideDishesOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderedProduct" ADD CONSTRAINT "OrderedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedProduct" ADD CONSTRAINT "OrderedProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sideDishe" ADD CONSTRAINT "sideDishe_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sideDishesOrder" ADD CONSTRAINT "sideDishesOrder_sideDishesId_fkey" FOREIGN KEY ("sideDishesId") REFERENCES "sideDishe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sideDishesOrder" ADD CONSTRAINT "sideDishesOrder_orderedProductId_fkey" FOREIGN KEY ("orderedProductId") REFERENCES "OrderedProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

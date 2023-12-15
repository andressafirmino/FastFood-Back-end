import prisma from '@/configs/database';

export async function createProducts() {
  await prisma.product.createMany({
    data: [
      {
        name: 'X-burguer',
        price: 3400,
        description: 'Hambúguer, pão, cebola, queijo, alface e tomate',
        image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
        category: 'SNACK',
      },
      {
        name: 'Coca-cola',
        price: 400,
        description: '350 ml',
        image:
          'https://w7.pngwing.com/pngs/922/962/png-transparent-coca-cola-fizzy-drinks-diet-coke-fanta-coca-cola-cola-cola-wars-aluminum-can.png',
        category: 'DRINK',
      },
      {
        name: 'Combo x-burguer',
        price: 4400,
        description: '1 x-buguer, 1 batata-frita pequena e um refrigerante de 350ml',
        image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
        category: 'COMBO',
      },
      {
        name: 'Pudim',
        price: 1000,
        description: 'Pudim de doce de leite',
        image: 'https://www.designi.com.br/images/preview/11205671.jpg',
        category: 'DESSERT',
      },
    ],
  });
  await prisma.sideDishe.createMany({
    data: [
      {
        name: 'Batata-frita',
        price: 800,
        description: 'Pequena',
        image:
          'https://img.freepik.com/psd-premium/batatas-fritas-isoladas-em-fundo-transparente-png-psd_888962-658.jpg',
      },
      {
        name: 'Bacon',
        price: 100,
        description: '100g',
        image: 'https://img.freepik.com/psd-premium/fatias-de-bacon-isoladas-em-transparente-png-psd_888962-596.jpg',
      },
    ],
  });
}

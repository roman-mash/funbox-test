import { IProductItem } from '../types/productItem';

const productList: IProductItem[] = [
  {
    id: 1,
    amount: 10,
    category: 'Сказочное заморское яство',
    productTitle: 'Нямушка',
    productType: 'с фуа-гра',
    features: {
      portion: 10,
      gift: 1,
    },
    weight: 0.5,
    description: 'Печень утки разварная с артишоками.',
  },
  {
    id: 2,
    amount: 10,
    category: 'Сказочное заморское яство',
    productTitle: 'Нямушка',
    productType: 'с рыбой',
    features: {
      portion: 40,
      gift: 2,
    },
    weight: 2,
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: 3,
    amount: 0,
    category: 'Сказочное заморское яство',
    productTitle: 'Нямушка',
    productType: 'с курой',
    features: {
      portion: 100,
      gift: 5,
      mark: 'заказчик доволен',
    },
    weight: 5,
    description: 'Филе из цыплят с трюфелями в бульоне.',
  },
];

export default productList;

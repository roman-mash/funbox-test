interface ProductFeatures {
  portion: number;
  gift: number;
  mark?: string;
}

export interface IProductItem {
  id: number;
  amount: number;
  category: string;
  productTitle: string;
  productType: string;
  features: ProductFeatures;
  weight: number;
  description: string;
}

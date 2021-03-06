import React, { FC, useEffect, useState } from 'react';
import productList from '../../data/products';
import { IProductItem } from '../../types/productItem';
import ProductItem from '../ProductItem/ProductItem';
import './_ProductList.scss';

const ProductList: FC = () => {
  const [products, setProducts] = useState<IProductItem[]>([]);

  useEffect(() => {
    setProducts(productList);
  }, [products]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;

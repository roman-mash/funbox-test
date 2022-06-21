import React, { FC, useState } from 'react';
import { IProductItem } from '../../types/productItem';
import getEndings from '../../utils/getEndings';
import './_ProductItem.scss';

interface ProductItemProps {
  product: IProductItem;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  let [hoverCount, setHoverCount] = useState<number>(0);

  const selectHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    setHoverCount(1);
  };

  const hoverCountHandler = () => {
    setHoverCount((hoverCount += 1));
  };

  return (
    <article
      className={
        isChecked && hoverCount > 1 ? 'product-card selected' : 'product-card'
      }
    >
      <input
        type="checkbox"
        name="product"
        id={`product${product.id}`}
        checked={isChecked}
        onChange={selectHandler}
        disabled={product.amount ? false : true}
      />
      <label
        htmlFor={`product${product.id}`}
        className="product-lbl"
        onMouseEnter={hoverCountHandler}
      >
        <div className="product">
          <span className="product__category">{product.category}</span>
          <span className="product__tip">Котэ не одобряет?</span>
          <h3 className="product__title">{product.productTitle}</h3>
          <span className="product__type">{product.productType}</span>
          <div className="product__features product-features">
            <span className="product-features__item">
              <b>{product.features.portion}</b>{' '}
              {getEndings(product.features.portion, [
                'порция',
                'порции',
                'порций',
              ])}
            </span>
            <span className="product-features__item">
              <b>{product.features.gift}</b>{' '}
              {getEndings(product.features.portion, ['мышь', 'мыши', 'мышей'])}{' '}
              в подарок
            </span>

            {product.features.hasOwnProperty('mark') ? (
              <span className="product-features__item">
                {product.features.mark}
              </span>
            ) : (
              ''
            )}
          </div>
          <div className="product__weight product-weight">
            <span className="product-weight__count">{product.weight}</span>
            <span className="product-weight__item">кг</span>
          </div>
        </div>
      </label>
      {isChecked ? (
        <div className="product-description">{product.description}</div>
      ) : product.amount ? (
        <div className="product-description">
          Чего сидишь? Порадуй котэ,{' '}
          <label htmlFor={`product${product.id}`}>купи.</label>
        </div>
      ) : (
        <div className="product-description unavailable">
          Печалька, {product.productType} закончился.
        </div>
      )}
    </article>
  );
};

export default ProductItem;

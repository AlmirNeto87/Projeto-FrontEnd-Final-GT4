
import {
  ProductCardContainer,
  ProductImage,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  ProductDiscount,
} from './ProductCard.styles';

const formatPrice = (value) => {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const ProductCard = ({ imagem, name, price, priceDiscount }) => {
  const hasDiscount = priceDiscount !== undefined &&
    priceDiscount !== null;

  return (
    <ProductCardContainer>
      <ProductImage src={imagem} alt={name} />

      <ProductName>{name}</ProductName>

      <ProductPriceContainer>
        {hasDiscount ? (
          <>
            <ProductPrice $hasDiscount>
              {formatPrice(price)}
            </ProductPrice>

            <ProductDiscount>
              {formatPrice(priceDiscount)}
            </ProductDiscount>
          </>
        ) : (
          <ProductDiscount>
            {formatPrice(price)}
          </ProductDiscount>
        )}
      </ProductPriceContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;

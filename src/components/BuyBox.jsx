
import {
  BuyBoxContainer,
  BuyBoxName,
  BuyBoxReference,
  BuyBoxRating,
  BuyBoxPriceContainer,
  BuyBoxPrice,
  BuyBoxDiscount,
  BuyBoxDescription,
  BuyBoxOptions,
  BuyBoxButton,
} from './BuyBox.styles';

const formatPrice = (value) => {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  const hasDiscount =
    priceDiscount !== undefined && priceDiscount !== null;

  return (
    <BuyBoxContainer>
      <BuyBoxName>{name}</BuyBoxName>

      <BuyBoxReference>
        Ref: {reference}
      </BuyBoxReference>

      <BuyBoxRating>
        ⭐ {stars} ({rating} avaliações)
      </BuyBoxRating>

      <BuyBoxPriceContainer>
        {hasDiscount && (
          <BuyBoxPrice>
            {formatPrice(price)}
          </BuyBoxPrice>
        )}

        <BuyBoxDiscount>
          {formatPrice(hasDiscount ? priceDiscount : price)}
        </BuyBoxDiscount>
      </BuyBoxPriceContainer>

      <BuyBoxDescription>
        <strong>Descrição do produto</strong>
        <p>{description}</p>
      </BuyBoxDescription>

      <BuyBoxOptions>
        {children}
      </BuyBoxOptions>

      <BuyBoxButton type="button">
        Comprar
      </BuyBoxButton>
    </BuyBoxContainer>
  );
};

export default BuyBox;

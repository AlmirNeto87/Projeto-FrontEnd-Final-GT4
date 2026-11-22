
import styled from 'styled-components';

export const ProductCardContainer = styled.article`
  width: 292px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductImage = styled.img`
  width: 292px;
  height: 321px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductName = styled.h3`
  color: #1F1F1F;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProductPrice = styled.span`
  color: ${({ $hasDiscount }) =>
    $hasDiscount ? '#8F8F8F' : '#1F1F1F'};

  font-size: 24px;
  font-weight: 400;

  text-decoration: ${({ $hasDiscount }) =>
    $hasDiscount ? 'line-through' : 'none'};
`;

export const ProductDiscount = styled.span`
  color: #1F1F1F;
  font-size: 24px;
  font-weight: 700;
`;

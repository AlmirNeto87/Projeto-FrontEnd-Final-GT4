
import styled from 'styled-components';

export const BuyBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 440px;
`;

export const BuyBoxName = styled.h1`
  margin: 0;
  color: #1F1F1F;
  font-size: 32px;
  font-weight: 700;
`;

export const BuyBoxReference = styled.span`
  color: #8F8F8F;
  font-size: 12px;
`;

export const BuyBoxRating = styled.div`
  color: #8F8F8F;
  font-size: 14px;
`;

export const BuyBoxPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BuyBoxPrice = styled.span`
  color: #CCCCCC;
  font-size: 16px;
  text-decoration: line-through;
`;

export const BuyBoxDiscount = styled.span`
  color: #1F1F1F;
  font-size: 32px;
  font-weight: 700;
`;

export const BuyBoxDescription = styled.div`
  color: #474747;
  font-size: 14px;
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }
`;

export const BuyBoxOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BuyBoxButton = styled.button`
  width: 100%;
  min-height: 48px;
  border: none;
  border-radius: 8px;
  background: #C92071;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #991956;
  }
`;


import styled from 'styled-components';

export const ProductViewContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px 80px;
`;

export const ProductMainContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ProductGalleryContainer = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 700px;
  width: 100%;
`;

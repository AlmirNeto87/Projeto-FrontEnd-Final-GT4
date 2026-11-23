
import styled from 'styled-components';

export const HomePageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 80px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CollectionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

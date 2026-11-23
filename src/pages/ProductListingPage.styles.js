
import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px 80px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FilterSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 0 0 308px;
  width: 308px;

  @media (max-width: 900px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  min-height: 60px;
  padding: 8px 16px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
`;

export const SortLabel = styled.label`
  color: #474747;
  font-size: 16px;
`;

export const SortSelect = styled.select`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #474747;
  font-size: 14px;
  cursor: pointer;
`;

export const FilterPanel = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #CCCCCC;
`;

export const FilterPanelTitle = styled.h2`
  margin: 0;
  padding-bottom: 16px;
  color: #474747;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #CCCCCC;
`;

export const FilterPanelContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 20px;
`;


export const ProductsContainer = styled.div`
  flex: 1;
  min-width: 0;
  padding-left: 10px;

  .products-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  @media (max-width: 1100px) {
    .products-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    padding-left: 0;

    .products-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  min-height: 250px;
  padding: 32px;
  text-align: center;
  color: #474747;
  font-size: 18px;
  font-weight: 700;

  span {
    color: #8F8F8F;
    font-size: 14px;
    font-weight: 400;
  }
`;

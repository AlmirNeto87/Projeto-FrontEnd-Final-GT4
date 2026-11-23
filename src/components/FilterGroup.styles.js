
import styled from 'styled-components';

export const FilterGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FilterGroupTitle = styled.h3`
  margin: 0;
  color: #474747;
  font-size: 14px;
  font-weight: 700;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterInput = styled.input`
  width: 22px;
  height: 22px;
  margin: 0;
  accent-color: #C92071;
  cursor: pointer;
`;

export const FilterLabel = styled.label`
  color: #474747;
  font-size: 14px;
  cursor: pointer;
`;

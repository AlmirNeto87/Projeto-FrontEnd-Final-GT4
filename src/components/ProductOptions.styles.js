
import styled from 'styled-components';

export const ProductOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


export const OptionsTitle = styled.h3`
  margin: 0;
  color: #474747;
  font-size: 14px;
  font-weight: 700;
`;


export const OptionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const OptionButton = styled.button`
  width: ${({ $shape }) => $shape === 'circle' ? '31px' : '46px'};
  height: ${({ $shape }) => $shape === 'circle' ? '31px' : '46px'};
  border: ${({ $selected }) =>
    $selected ? '2px solid #C92071' : '1px solid #CCCCCC'};
  border-radius: ${({ $shape, $radius }) =>
    $shape === 'circle' ? '50%' : $radius};
 
  background: ${({ $type, $optionColor }) =>
    $type === 'color' ? $optionColor : '#FFFFFF'};

  color: #474747;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    border-color: #C92071;
  }
`;

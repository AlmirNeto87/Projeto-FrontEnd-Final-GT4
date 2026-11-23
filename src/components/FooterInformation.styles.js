
import styled from 'styled-components';

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InformationTitle = styled.h3`
  margin: 0;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
`;

export const InformationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const InformationItem = styled.li`
  a {
    color: #FFFFFF;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #B5B6F2;
    }
  }
`;

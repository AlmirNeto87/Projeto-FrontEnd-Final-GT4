
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InformationLink = styled(Link)`
  color: #FFFFFF;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #C92071;
  }
`;

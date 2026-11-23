import styled from 'styled-components';

export const NotFoundContainer = styled.section`
  width: 100%;
  min-height: 550px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #F5F5F5;
`;

export const ErrorCode = styled.h1`
  margin: 0;
  color: #C92071;
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
`;

export const NotFoundTitle = styled.h2`
  margin: 24px 0 12px;
  color: #1F1F1F;
  font-size: 28px;
  font-weight: 700;
`;

export const NotFoundMessage = styled.p`
  max-width: 480px;
  margin: 0;
  color: #666666;
  font-size: 16px;
  line-height: 1.6;
`;

export const BackHomeButton = styled.button`
  margin-top: 32px;
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  background-color: #C92071;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #991956;
  }
`;
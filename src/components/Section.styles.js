
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $titleAlign }) =>
    $titleAlign === 'center' ? 'center' : 'space-between'};

  position: relative;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  color: #474747;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const SectionLink = styled.a`
  color: #C92071;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
`;

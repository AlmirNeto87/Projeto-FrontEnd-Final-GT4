
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 48px 40px 24px;
  background: #1F1F1F;
  color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 40px 20px 24px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  max-width: 1440px;
  margin: 0 auto 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 320px;
`;



export const FooterDescription = styled.p`
  margin: 0;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const FooterInformations = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(130px, 1fr));
  gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
    gap: 32px 20px;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  hr {
    border: none;
    border-top: 1px solid #474747;
    margin: 0 0 24px;
  }

  p {
    margin: 0;
    color: #FFFFFF;
    font-size: 13px;
    text-align: center;
  }
`;

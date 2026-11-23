
import FooterInformation from './FooterInformation';

import Logo from './Logo';
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';

import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterDescription,
  SocialLinks,
  SocialLink,
  FooterInformations,
  FooterBottom,
} from './Footer.styles';

const Footer = () => {
  const informationGroups = [
    {
      title: 'Informação',
      informations: [
        { text: 'Sobre a Drip Store', link: '/sobre' },
        { text: 'Segurança', link: '/seguranca' },
        { text: 'Wishlist', link: '/wishlist' },
        { text: 'Blog', link: '/blog' },
        { text: 'Trabalhe conosco', link: '/trabalhe-conosco' },
        { text: 'Meus pedidos', link: '/pedidos' },
      ],
    },
    {
      title: 'Categorias',
      informations: [
        { text: 'Camisetas', link: '/categorias/camisetas' },
        { text: 'Calças', link: '/categorias/calcas' },
        { text: 'Bonés', link: '/categorias/bones' },
        { text: 'Headphones', link: '/categorias/headphones' },
        { text: 'Tênis', link: '/categorias/tenis' },
      ],
    },
    {
      title: 'Contato',
      informations: [
        { text: 'Av. Santos Dumont, 1510 - 1º andar', link: '/contato' },
        { text: '(85) 3051-3411', link: '/contato' },
        { text: 'contato@dripstore.com.br', link: '/contato' },
      ],
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <Logo variant="footer" />

          <FooterDescription>
            A Drip Store oferece estilo, qualidade e conforto para você
            expressar sua personalidade em todos os momentos.
          </FooterDescription>

          <SocialLinks>
            <SocialLink href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="" />
            </SocialLink>

            <SocialLink href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="" />
            </SocialLink>

            <SocialLink href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </SocialLink>
          </SocialLinks>
        </FooterBrand>

        <FooterInformations>
          {informationGroups.map((group) => (
            <FooterInformation
              key={group.title}
              title={group.title}
              informations={group.informations}
            />
          ))}
        </FooterInformations>
      </FooterContent>

      <FooterBottom>
        <hr />
        <p>© {new Date().getFullYear()} Digital Store</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

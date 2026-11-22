
import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

const Logo = ({ variant = 'header' }) => {
  const logo = variant === 'footer' ? logoFooter : logoHeader;

  return (
    <img
      src={logo}
      alt="Digital Store"
      width="253"
      height="44"
    />
  );
};

export default Logo;

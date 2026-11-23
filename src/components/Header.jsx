
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import miniCart from '../assets/icons/mini-cart.svg';


import {
  HeaderContainer,
  HeaderTop,
  SearchForm,
  SearchInput,
  SearchButton,
  UserActions,
  RegisterLink,
  LoginLink,
  CartIcon,
  Navigation,
  NavigationLink,
} from './Header.styles';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const term = searchTerm.trim();

    if (term) {
      navigate(`/produtos?filter=${encodeURIComponent(term)}`);
    } else {
      navigate('/produtos');
    }
  };

  return (
    <HeaderContainer>
      <HeaderTop>
        
        <Link to="/" aria-label="Digital Store - Página inicial">
            <Logo />
        </Link>


        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="search"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <SearchButton type="submit" aria-label="Pesquisar">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </SearchButton>
        </SearchForm>

        <UserActions>
          <RegisterLink to="/cadastro">
            Cadastre-se
          </RegisterLink>

          <LoginLink to="/login">
            Entrar
          </LoginLink>

          
          <CartIcon
            aria-label="Carrinho de compras"
            title="Carrinho de compras"
            >
            <img src={miniCart} alt="" />
          </CartIcon>

        </UserActions>
      </HeaderTop>

      <Navigation>
        <NavigationLink to="/" end>
          Home
        </NavigationLink>

        <NavigationLink to="/produtos">
          Produtos
        </NavigationLink>

        <NavigationLink to="/categorias">
          Categorias
        </NavigationLink>

        <NavigationLink to="/pedidos">
          Meus Pedidos
        </NavigationLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;


import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  background: #FFFFFF;
  padding: 24px 40px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px 16px 0;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 16px;
  }
`;


export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 180px;
  height: 60px;
  background: #F5F5F5;
  border-radius: 8px;
  padding: 0 16px;

  @media (max-width: 900px) {
    order: 3;
    flex-basis: 100%;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #474747;
  font-size: 16px;

  &::placeholder {
    color: #8F8F8F;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: #666666;
  cursor: pointer;
  padding: 6px;

  &:hover {
    color: #C92071;
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const RegisterLink = styled(Link)`
  color: #474747;
  font-size: 16px;
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    color: #C92071;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 40px;
  border-radius: 4px;
  background: #C92071;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background: #991956;
  }

  @media (max-width: 600px) {
    width: 80px;
  }
`;


export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 26px;
    height: 26px;
    object-fit: contain;
  }
`;


export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 1440px;
  margin: 28px auto 0;

  @media (max-width: 600px) {
    gap: 20px;
    overflow-x: auto;
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  padding-bottom: 12px;
  color: #474747;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;

  &.active {
    color: #C92071;
    font-weight: 700;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #C92071;
    border-radius: 3px;
  }

  &:hover {
    color: #C92071;
  }
`;

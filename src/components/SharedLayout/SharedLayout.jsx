import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './SharedLayout.css';
import styled from 'styled-components';
import { Header, LayoutList, LayoutListItem } from './SharedLayout.styled';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <LayoutList>
          <LayoutListItem>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </L>
          <LayoutListItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </LayoutListItem>
        </LayoutList>
      </Header>
      <Outlet />
    </div>
  );
};
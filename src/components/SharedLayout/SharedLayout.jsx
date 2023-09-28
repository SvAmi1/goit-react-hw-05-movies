import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import './SharedLayout.css';
import { Header, LayoutList, LayoutListItem, StyledNavLink } from './SharedLayout.styled';


export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <LayoutList>
          <LayoutListItem>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </LayoutListItem>
          <LayoutListItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </LayoutListItem>
        </LayoutList>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
 box-shadow: -1px 18px 24px -14px rgba(66, 68, 90, 1);
  border-radius: 15px;
  height: 50px;
  `;

export const LayoutList = styled.ul`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
  list-style: none;
  `;

export const LayoutListItem = styled.li`
  margin-top: 10px;
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
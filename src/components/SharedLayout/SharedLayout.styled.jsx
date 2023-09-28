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

export const EscBtn = styled(NavLink)` 
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  color: black;
  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 8px;
  padding: 4px;
  margin: 70px auto 22px 22px;

  &:hover,
  :focus {
    color: blueviolet;
    background-color: black;
  }
  `;

export const Section = styled.section`
display: flex;

h4 {
  margin-top: 0;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 0;
  height: fit-content;

  li {
    margin-right: 18px;

    p {
      margin-bottom: 0;
    }
  }
}
`;

export const Info = styled.div`
  margin-left: 22px;
  h4 {
    margin-bottom: 0;
  }
`;

export const Loading = styled.div`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0;
`;
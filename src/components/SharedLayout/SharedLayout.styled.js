import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin: 0px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px 0;
`;

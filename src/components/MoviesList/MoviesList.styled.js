import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  text-decoration: none;
`;

export const Li = styled.li`
  /* padding: 8px 16px; */
  /* border-radius: 4px; */
  text-decoration: none;
  /* color: black; */
  font-weight: 500;
`;
export const ItemLink = styled(NavLink)`
  display: block;
  padding: 4px 4px;
  /* border-radius: 4px; */
  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover,
  :focus {
    color: #910a6d;
  }
  &.active {
    color: white;
    background-color: #910a6d;
  }
`;

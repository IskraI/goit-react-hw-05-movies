import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledImg = styled.img`
  display: block;
  width: 200px;
  height: 300px;
`;
export const MovieInfo = styled.div`
  display: flex;
  gap: 8px;
`;
export const Info = styled.div`
  margin: 0 12px;
  /* display: flex;
  flex-wrap: wrap;
  gap: 8px; */
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const StyledNavLink = styled(NavLink)`
  padding: 8px 8px;
  display: inline-block;
  /* margin-bottom: 16px; */
  text-decoration: none;
  color: black;
  font-weight: 500;
  width: auto;
  &.active {
    color: white;
    background-color: #910a6d;
  }
`;

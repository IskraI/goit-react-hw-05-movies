import { StyledButton } from './ButtonBack.styled';

export const ButtonBack = ({ to, children }) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

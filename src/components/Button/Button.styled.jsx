import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.spacing.xl};

  &:hover {
    opacity: 0.7;
  }
`;
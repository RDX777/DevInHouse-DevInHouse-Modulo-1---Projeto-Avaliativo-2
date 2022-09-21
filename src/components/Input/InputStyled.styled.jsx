import styled from "styled-components";

export const InputStyled = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.sm};
`;
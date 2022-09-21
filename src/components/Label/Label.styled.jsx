import styled from "styled-components";

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xl};
`;
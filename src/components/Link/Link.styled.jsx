import styled from "styled-components"

import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`

border-radius: ${({ theme }) => theme.spacing.sm};
background-color: ${({ theme }) => theme.colors.secondary};
padding: ${({ theme }) => theme.spacing.md};
margin: ${({ theme }) => theme.spacing.sm};
text-decoration: none;
color: ${({ theme }) => theme.colors.primary};
font-size: ${({ theme }) => theme.spacing.xl};


&:hover {
  opacity: 0.7;
}
`

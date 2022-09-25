import styled from "styled-components";

export const BoxStyled = styled.div`
width: 350px;
height: 120px;
background: ${({ theme }) => theme.colors.backgroundPrimary};
color: ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.spacing.sm};
box-shadow: 10px 5px 5px black;
display: flex;
flex-direction: column;
align-items: center;
`
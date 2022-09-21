import styled from "styled-components";

export const BoxStyled = styled.div`
width: 300px;
height: 300px;
background: ${({ theme }) => theme.colors.backgroundSecondary};
color: ${({ theme }) => theme.colors.primary};
border: 1px solid;
border-radius: ${({ theme }) => theme.spacing.sm};
box-shadow: 10px 5px 5px black;
display: flex;
flex-direction: column;
align-items: center;
`

export const CorErro = styled.p`
color: ${({ theme }) => theme.colors.error};
`

import styled from "styled-components";

export const BoxStyled = styled.div`
width: 80%;
height: 90%;
background: ${({ theme }) => theme.colors.backgroundSecondary};
color: ${({ theme }) => theme.colors.primary};
border: 1px solid;
border-radius: ${({ theme }) => theme.spacing.sm};
box-shadow: 10px 5px 5px black;
overflow-y: scroll;
overflow: overlay;
`

export const Coluna = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

export const Linha = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding: ${({ theme }) => theme.spacing.md};
`

export const Centro = styled.div`
display: flex;
padding: ${({ theme }) => theme.spacing.xl};
justify-content: center;
`

export const CorErro = styled.p`
color: ${({ theme }) => theme.colors.error};
`

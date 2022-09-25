import styled from "styled-components";

export const BoxStyled = styled.div`
width: 500px;
height: 420px;
background: ${({ theme }) => theme.colors.backgroundSecondary};
color: ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.spacing.sm};
box-shadow: 10px 5px 5px black;
display: flex;
flex-direction: column;
align-items: center;
`

export const H1Styled = styled.h1`
  margin: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.sm};
`

export const DivPessoaStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.sm};
`

export const DivImagemStyled = styled.div`
  height: 90px;
  width: 90px;
`

export const ImagemStyled = styled.img`
  border-radius: 50%;
  height: 85px;
  width: 85px;
  background-position: -15px -15px;
  padding: ${({ theme }) => theme.spacing.sm};
`

export const DivNomeStyled = styled.div`
  width: 100%;
`

export const DivEnderecoStyled = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xl}
`

import styled from "styled-components";

export const BoxStyled = styled.div`
width: 350px;
height: 220px;
background: ${({ theme }) => theme.colors.backgroundPrimary};
color: ${({ theme }) => theme.colors.secondary};
border-radius: ${({ theme }) => theme.spacing.sm};
box-shadow: 10px 5px 5px black;
display: flex;
flex-direction: column;
align-items: center;
`

export const DivGeralStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`

export const DivImagemStyled = styled.div`
  height: 90px;
  width: 90px;
`

export const ImagemStyled = styled.img`
  height: 85px;
  width: 85px;
  background-position: -15px -15px;
  padding: ${({ theme }) => theme.spacing.sm};
`
import styled from "styled-components"

export const BoxStyled = styled.div`
  width: 80%;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: 10px 5px 5px black;
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center; 
`

export const TemperaturaTempoStyled = styled.label`
color: ${({ theme }) => theme.colors.primary};
font-size: ${({ theme }) => theme.tamanhoFonte.xl};
padding: ${({ theme }) => theme.spacing.md};
`

export const CidadeTempoStyled = styled.label`
color: ${({ theme }) => theme.colors.primary};
font-size: ${({ theme }) => theme.tamanhoFonte.md};
padding: ${({ theme }) => theme.spacing.md};
`

export const EstatisticasTempoStyled = styled.label`
color: ${({ theme }) => theme.colors.primary};
font-size: ${({ theme }) => theme.tamanhoFonte.sm};
padding: ${({ theme }) => theme.spacing.sm};
`
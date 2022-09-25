import { usePerfilUsuario, usePrevisaoTempo } from "../../contexts" 

import { BoxStyled, TemperaturaTempoStyled, CidadeTempoStyled, EstatisticasTempoStyled } from "./PrevisaoTempo.styled.jsx"

export const PrevisaoTempo = () => {
  const { usuarioColetaCidade } = usePerfilUsuario()

  const { dadosPrevisao, consultaTempo} = usePrevisaoTempo()

  const cidade = usuarioColetaCidade()

  consultaTempo(cidade)

  const temperatura = dadosPrevisao?.main?.temp
  const sensacaoTermica = dadosPrevisao?.main?.feels_like
  const humidade = dadosPrevisao?.main?.humidity
 
  return (
    
    <BoxStyled>
      <TemperaturaTempoStyled>{temperatura} °C</TemperaturaTempoStyled>
      <CidadeTempoStyled>{cidade.toUpperCase()}</CidadeTempoStyled>
      <EstatisticasTempoStyled>Sensação térmica: {sensacaoTermica} °C - Humidade: {humidade}</EstatisticasTempoStyled>
    </BoxStyled>
    
  )
}
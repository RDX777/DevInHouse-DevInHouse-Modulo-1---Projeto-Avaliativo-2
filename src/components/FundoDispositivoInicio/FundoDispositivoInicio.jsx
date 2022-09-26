import { DivDispositivoInicio } from "./FundoDispositivoInicio.styled.jsx"
import { CardInicio } from "../"

export const FundoDispositivoInicio = () => {

  const dados = {
    LinkImagemItem : "https://st.depositphotos.com/1161999/1977/i/950/depositphotos_19776183-stock-photo-dawn-in-a-meadow.jpg",
    titulo: "Lampada magica do Aladin",
    local: "Quarto",
    status: false
  }

  return (
    <DivDispositivoInicio>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio dadosCard={dados}/>
      <CardInicio />
    </DivDispositivoInicio>
  )
  
}
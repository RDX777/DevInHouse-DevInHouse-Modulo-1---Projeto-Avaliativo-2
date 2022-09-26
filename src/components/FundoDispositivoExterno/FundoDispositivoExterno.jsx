import { DivDispositivoExterno, DivDispositivo } from "./FundoDispositivoExterno.styled.jsx"

import { CardExterno } from "../CardExterno"


export const FundoDispositivoExterno = () => {

  const dados = {
    LinkImagemItem: "https://st.depositphotos.com/1161999/1977/i/950/depositphotos_19776183-stock-photo-dawn-in-a-meadow.jpg",
    titulo: "Lampada magica do Aladin",
  }

  return (
    <DivDispositivoExterno>
      <h1>Dispositivos</h1>
      <DivDispositivo>
        <CardExterno dadosCard={dados} />
        <CardExterno dadosCard={dados} />
        <CardExterno dadosCard={dados} />
        <CardExterno dadosCard={dados} />
        <CardExterno dadosCard={dados} />
        <CardExterno dadosCard={dados} />
        <CardExterno dadosCard={dados}/>
      </DivDispositivo>
    </DivDispositivoExterno>
  )

}
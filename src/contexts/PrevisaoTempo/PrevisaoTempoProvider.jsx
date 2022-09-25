import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { PrevisaoTempoContext } from "./PrevisaoTempoContext.jsx"
import { consultaPrevisaoTempo } from "../../services/ConsultaPrevisaoTempo.js"

export const PrevisaoTempoProvider = ({ children }) => {
  const [cidade, setCidade] = useState("")
  const [dadosPrevisao, setDadosPrevisao] = useState({})

useEffect(() => {
  if(cidade !== "") {

    consultaPrevisaoTempo(cidade).then(response => response.json()).then(data => setDadosPrevisao(data))
}
}, [cidade])

const consultaTempo = (cidadeUsuario) => {
  setCidade(cidadeUsuario)
  }

  return (
    <PrevisaoTempoContext.Provider value={{dadosPrevisao, consultaTempo}}>
      {children}
    </PrevisaoTempoContext.Provider>
  )
}

PrevisaoTempoProvider.propTypes = {
  children: PropTypes.node,
};
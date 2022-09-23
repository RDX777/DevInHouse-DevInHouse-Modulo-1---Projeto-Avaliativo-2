import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { PrevisaoTempoContext } from "./PrevisaoTempoContext.jsx"
import { consultaPrevisaoTempo } from "../../services/ConsultaPrevisaoTempo.js"

export const PrevisaoTempoProvider = ({ children }) => {
  const [dadosPrevisao, setDadosPrevisao] = useState({})

  // useEffect(() => {
  //   if(campoCep) {
  //   toast.promise(consultaCep(campoCep)
  //     .then(response => response.json())
  //     .then(data => setDadosCep(data))
  //     , {
  //       pending: "Consultando CEP.",
  //       success: "CEP encontrado",
  //       error: "CEP não encontrado"
  //     })
  //   }

  // }, [campoCep])


  return (
    <PrevisaoTempoContext.Provider>
      {children}
    </PrevisaoTempoContext.Provider>
  )
}

PrevisaoTempoProvider.propTypes = {
  children: PropTypes.node,
};
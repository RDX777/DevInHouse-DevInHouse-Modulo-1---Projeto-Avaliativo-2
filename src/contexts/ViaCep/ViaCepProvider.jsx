import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from 'react-toastify';

import { ViaCepContext } from "./ViaCepContext.jsx"
import { consultaCep } from "../../services/consultaCep.js"

export const ViaCepProvider = ({ children }) => {
  const [dadosCep, setDadosCep] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  })

  const [campoCep, setCampoCep] = useState()

  useEffect(() => {
    if(campoCep) {
    toast.promise(consultaCep(campoCep)
      .then(response => response.json())
      .then(data => setDadosCep(data))
      , {
        pending: "Consultando CEP.",
        success: "CEP encontrado",
        error: "CEP não encontrado"
      })
    }

  }, [campoCep])

const handleCampoCep = (campoCep) => {
  setCampoCep(campoCep)
}

  return (
    <ViaCepContext.Provider value={{dadosCep, handleCampoCep}}>
      {children}
    </ViaCepContext.Provider>
  )
}

ViaCepProvider.propTypes = {
  children: PropTypes.node,
};
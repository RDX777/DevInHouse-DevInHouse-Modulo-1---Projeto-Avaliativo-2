import PropTypes from "prop-types"
import { useState } from "react"

import { PerfilUsuarioContext } from "./PerfilUsuarioContext.jsx"
import { salvaUsuario, coletaUsuario, coletaCidade, coletaUsuarioToJson } from "../../services/PerfilUsuario.js"

export const PerfilUsuarioProvider = ({ children }) => {

  const [usuarioPerfil, setUsuarioPerfil] = useState()

  const usuarioSalva = (perfil) => {
    salvaUsuario(perfil)
  }

  const usuarioColeta = () => {
    setUsuarioPerfil(coletaUsuario())
  }

  const usuarioColetaCidade = () => {
    return coletaCidade()
  }

  const usuarioColetaEdita = () => {
    return coletaUsuarioToJson()
  }

  return (
    <PerfilUsuarioContext.Provider value={{ usuarioSalva, usuarioColeta, usuarioPerfil, usuarioColetaCidade, usuarioColetaEdita }}>
      {children}
    </PerfilUsuarioContext.Provider>
  )
}

PerfilUsuarioProvider.propTypes = {
  children: PropTypes.node,
};
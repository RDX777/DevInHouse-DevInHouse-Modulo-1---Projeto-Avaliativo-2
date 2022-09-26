import PropTypes from "prop-types"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import { AutenticaUsuarioContext } from "./AutenticaUsuarioContext"
import { coletaUsuarioAutentica } from "../../services/PerfilUsuario.js"
import { toast } from "react-toastify"

export const AutenticaUsuarioProvider = ({ children }) => {

  const [ estaLogado, setEstaLogado ] = useState(true)

  const navigate = useNavigate();

  const verificaUsuario = (dadosUsuario) => {
    const usuario = coletaUsuarioAutentica()
    if (dadosUsuario.login === usuario.login && dadosUsuario.senha === usuario.senha) {
      toast.success("Login aceito")
      setEstaLogado(true)
      navigate("/inicial")
    } else {
      setEstaLogado(false)
      toast.error("Login ou senhas invalidos")
    }
    
  } 

  const deslogaUsuario = () => {
    setEstaLogado(false)
  }

  return (
    <AutenticaUsuarioContext.Provider value={{estaLogado, verificaUsuario, deslogaUsuario}}>
      {children}
    </AutenticaUsuarioContext.Provider>
  )

}

AutenticaUsuarioProvider.propTypes = {
  children: PropTypes.node,
};
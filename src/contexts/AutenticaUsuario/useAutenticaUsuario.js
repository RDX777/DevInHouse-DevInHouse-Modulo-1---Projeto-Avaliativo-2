import { useContext } from "react"
import { AutenticaUsuarioContext } from "./AutenticaUsuarioContext.jsx"

export const useAutenticaUsuario = () => {
  const context = useContext(AutenticaUsuarioContext)
  return context
}

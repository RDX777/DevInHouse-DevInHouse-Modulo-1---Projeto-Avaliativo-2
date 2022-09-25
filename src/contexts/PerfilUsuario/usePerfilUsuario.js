import { useContext } from "react"
import { PerfilUsuarioContext } from "./PerfilUsuarioContext.jsx"

export const usePerfilUsuario = () => {
  const context = useContext(PerfilUsuarioContext)
  return context
}

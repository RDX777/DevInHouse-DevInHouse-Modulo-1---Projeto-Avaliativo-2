import { useAutenticaUsuario } from "../contexts"
import { Router, RouterAutenticado } from "./"

export const RouterConfig = () => {
  const {estaLogado} = useAutenticaUsuario()

  let logado = null
  if(estaLogado) {
    logado = <RouterAutenticado />
  } else {
    logado = <Router />
  }

  return (
    <>
      {logado}
    </>
  )
}
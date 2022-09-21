import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { TemaContext } from "./TemaContext.jsx"
import { temaClaro, temaEscuro } from "../../themes"
import { coletaTema, salvaTema } from "../../utils/localStorageTema.js"

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(temaClaro);

  useEffect(() => {
    alteraTema(coletaTema())
  }, [])

  const alteraTema = (temaRecebe) => {
    salvaTema(temaRecebe)
    setTema(() => {
      if (temaRecebe === "escuro") {
        return temaEscuro
      }
      return temaClaro
      
    })
  }



  return (
    <TemaContext.Provider value={{temas: tema, alteraTema}}>
      {children}
    </TemaContext.Provider>
  )
}

TemaProvider.propTypes = {
  children: PropTypes.node,
};
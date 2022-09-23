import { useContext } from "react"
import { PrevisaoTempoContext } from "./PrevisaoTempoContext.jsx"

export const useTema = () => {
  const context = useContext(PrevisaoTempoContext)
  return context
}

import { useContext } from "react"
import { PrevisaoTempoContext } from "./PrevisaoTempoContext.jsx"

export const usePrevisaoTempo = () => {
  const context = useContext(PrevisaoTempoContext)
  return context
}

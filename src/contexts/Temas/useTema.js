import { useContext } from "react"
import { TemaContext } from "./TemaContext.jsx"

export const useTema = () => {
  const context = useContext(TemaContext)
  return context
}

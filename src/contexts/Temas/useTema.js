import { useContext } from "react"
import { TemaContext } from "./TemaContext"

export const useTema = () => {
  const context = useContext(TemaContext)
  return context
}

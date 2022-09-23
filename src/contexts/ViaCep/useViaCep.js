import { useContext } from "react"
import { ViaCepContext } from "./ViaCepContext"

export const useViaCep = () => {
  const context = useContext(ViaCepContext)
  return context
}

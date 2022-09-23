import { ThemeProvider } from "styled-components"


import { GlobalStyle } from "../../themes"
import { ContainerGeral, Navbar, Login } from "../../components"
import { useTema } from "../../contexts"

export const PaginaLogin = () => {

  const { temas } = useTema()

  return (
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <Login />
      </ContainerGeral>
    </ThemeProvider>
  )
}
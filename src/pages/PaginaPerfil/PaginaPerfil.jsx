import { ThemeProvider } from "styled-components"


import { GlobalStyle } from "../../themes"
import { ContainerGeral, Navbar, PerfilUsuario } from "../../components"
import { useTema } from "../../contexts"

export const PaginaPerfil = () => {

  const { temas } = useTema()

  return (
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <PerfilUsuario />
      </ContainerGeral>
    </ThemeProvider>
  )
}
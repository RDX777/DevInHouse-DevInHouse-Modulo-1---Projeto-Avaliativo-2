import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../../themes"
import { Navbar, ContainerGeral, Cadastro } from "../../components"
import { useTema, ViaCepProvider } from "../../contexts"

export const PaginaCadastro = () => {

  const { temas } = useTema()

  return (

    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <ViaCepProvider>
          <Cadastro />
        </ViaCepProvider>
      </ContainerGeral>
    </ThemeProvider>
  )
}
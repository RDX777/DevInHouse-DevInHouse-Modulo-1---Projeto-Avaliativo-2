import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../../themes"
import { Navbar, ContainerGeral } from "../../components"
import { useTema } from "../../contexts"
import { PaginaCadastro } from "../../pages"
import { PaginaLogin } from "../PaginaLogin"

export const PaginaInicial = () => {
  const { temas } = useTema()

  return (
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <PaginaCadastro />
      </ContainerGeral>
    </ThemeProvider>
  )
}

PaginaInicial.propTypes = {
  children: PropTypes.node,
};
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../../themes"
import { Navbar, ContainerGeral, PrevisaoTempo } from "../../components"
import { useTema } from "../../contexts"

export const PaginaInicial = () => {
  const { temas } = useTema()

  return (
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <PrevisaoTempo />
        <PrevisaoTempo />
        <PrevisaoTempo />
        <PrevisaoTempo />
        <PrevisaoTempo />
      </ContainerGeral>
    </ThemeProvider>
  )
}

PaginaInicial.propTypes = {
  children: PropTypes.node,
};
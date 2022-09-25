import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../../themes"
import { Navbar, ContainerGeral, PrevisaoTempo, FundoDispositivoInicio} from "../../components"
import { useTema, PrevisaoTempoProvider } from "../../contexts"

export const PaginaInicial = () => {
  const { temas } = useTema()

  return (
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <PrevisaoTempoProvider>
          <PrevisaoTempo />
        </PrevisaoTempoProvider>
        <FundoDispositivoInicio />
      </ContainerGeral>
    </ThemeProvider>
  )
}

PaginaInicial.propTypes = {
  children: PropTypes.node,
};
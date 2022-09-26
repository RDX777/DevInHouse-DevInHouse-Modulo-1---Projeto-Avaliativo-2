import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../../themes"
import { Navbar, ContainerGeral, FundoDispositivoExterno} from "../../components"
import { useTema  } from "../../contexts"

export const PaginaDispositivos = () => {
  const { temas } = useTema()

  return (
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <Navbar />
      <ContainerGeral>
        <FundoDispositivoExterno />
      </ContainerGeral>
    </ThemeProvider>
  )
}

PaginaDispositivos.propTypes = {
  children: PropTypes.node,
};
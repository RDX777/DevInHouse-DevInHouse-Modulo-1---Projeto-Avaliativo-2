import { ContainerGeralStyled } from "./ContainerGeral.styled.jsx"
import { PropTypes } from "prop-types"

export const ContainerGeral = ({ children }) => {
  return (
      <ContainerGeralStyled>
        {children}
      </ContainerGeralStyled>
  )
}

ContainerGeral.propTypes = {
  children: PropTypes.node,
};
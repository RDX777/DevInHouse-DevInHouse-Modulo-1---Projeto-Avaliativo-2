import { PropTypes } from "prop-types"

import { BoxStyled } from "./CardInicio.styled.jsx"

export const CardInicio = ({ dadosCard }) => {
  return (
    <BoxStyled>
      <h1>card inicio</h1>
    </BoxStyled>
  )
}

CardInicio.propTypes = {
  dadosCard: PropTypes.shape({
    LinkImagemItem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }),
}
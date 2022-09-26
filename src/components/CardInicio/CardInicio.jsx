import { PropTypes } from "prop-types"

import { BoxStyled, ImagemStyled, DivImagemStyled, DivDeralStyled } from "./CardInicio.styled.jsx"

export const CardInicio = ({ dadosCard }) => {
  return (
    <BoxStyled>
      <DivDeralStyled>
        <DivImagemStyled>
          <ImagemStyled src={dadosCard?.LinkImagemItem} alt="ImagemItem" />
        </DivImagemStyled>
        <div>
          <p>{dadosCard?.titulo}</p>
          <p>{dadosCard?.local} | {dadosCard?.status ? "ON": "OFF"}</p>
        </div>
        <div>
          <button>Ligar / desligar</button>
        </div>
      </DivDeralStyled>
    </BoxStyled>
  )
}

CardInicio.propTypes = {
  dadosCard: PropTypes.shape({
    LinkImagemItem: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }),
}
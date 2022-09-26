import { PropTypes } from "prop-types"

import { Button } from "../Button"

import { BoxStyled, ImagemStyled, DivImagemStyled, DivGeralStyled } from "./CardExterno.styled.jsx"

export const CardExterno = ({ dadosCard }) => {
  return (
    <BoxStyled>
      <DivGeralStyled>
        <DivImagemStyled>
          <ImagemStyled src={dadosCard?.LinkImagemItem} alt="ImagemItem" />
        </DivImagemStyled>
        <div>
          <p>{dadosCard?.titulo}</p>
        </div>

        <Button>Adicionar</Button>

      </DivGeralStyled>
    </BoxStyled>
  )
}

CardExterno.propTypes = {
  dadosCard: PropTypes.shape({
    LinkImagemItem: PropTypes.string,
    titulo: PropTypes.string.isRequired,
  }),
}
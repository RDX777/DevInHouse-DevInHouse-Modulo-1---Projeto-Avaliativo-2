import { ButtonStyled } from "./Button.styled.jsx"
import { PropTypes } from "prop-types"

export const Button = ({ type, value, onClick, children }) => {
  return (
    <>
      <ButtonStyled type={type} onClick={onClick} value={value}>
        {children}
      </ButtonStyled>
    </>
  )
}

Button.defaultProp = {
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
import { PropTypes } from "prop-types"

import { LinkStyled } from "./Link.styled.jsx"


// eslint-disable-next-line react/prop-types
export const Link = ({ children, to}) => {
  return (
    <LinkStyled to={to}>
      {children}
    </LinkStyled>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}
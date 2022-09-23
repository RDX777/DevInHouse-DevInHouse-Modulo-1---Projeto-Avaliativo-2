import { Navigate, Route, Routes } from 'react-router-dom';
import PropTypes from "prop-types"

import { PaginaCadastro, PaginaInicial, PaginaLogin } from '../pages'

export const Router = () => {
  return (
      <Routes>
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/inicial' element={<PaginaInicial />} />
        <Route path='/login' element={<PaginaLogin />} />
        <Route path='*' element={<Navigate to={'/login'} replace={true} />} />
      </Routes>

  )
}

Router.propTypes = {
  children: PropTypes.node,
};
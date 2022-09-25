import { Navigate, Route, Routes } from 'react-router-dom';
import PropTypes from "prop-types"

import { PaginaCadastro, PaginaInicial, PaginaLogin, PaginaPerfil } from '../pages'

export const Router = ({children}) => {
  return (
      <Routes>
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/inicial' element={<PaginaInicial />} />
        <Route path='/login' element={<PaginaLogin />} />
        <Route path='/perfil' element={<PaginaPerfil />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>

  )
}

Router.propTypes = {
  children: PropTypes.node,
};
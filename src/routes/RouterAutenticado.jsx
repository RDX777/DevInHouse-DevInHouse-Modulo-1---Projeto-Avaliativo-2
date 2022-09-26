import { Route, Routes } from 'react-router-dom';

import { PaginaInicial, PaginaPerfil, PaginaCadastro, PaginaLogin, PaginaDispositivos } from '../pages'

export const RouterAutenticado = () => {
  return (
      <Routes>
        <Route path='/inicial' element={<PaginaInicial />} />
        <Route path='/perfil' element={<PaginaPerfil />} />
        <Route path='/dispositivos' element={<PaginaDispositivos />} />
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/login' element={<PaginaLogin />} />
        <Route path='*' element={<PaginaLogin />} />
      </Routes>

  )
}

import { Route, Routes } from 'react-router-dom';

import { PaginaCadastro, PaginaLogin } from '../pages'

export const Router = () => {
  return (
      <Routes>
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/login' element={<PaginaLogin />} />
        <Route path='*' element={<PaginaLogin />} />
      </Routes>

  )
}

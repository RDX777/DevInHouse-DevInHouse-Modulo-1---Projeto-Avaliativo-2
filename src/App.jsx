import { ToastContainer } from 'react-toastify'
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';

import { TemaProvider, PerfilUsuarioProvider } from "./contexts"

import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <TemaProvider>
          <PerfilUsuarioProvider>
            <Router />
          </PerfilUsuarioProvider>
        </TemaProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App;

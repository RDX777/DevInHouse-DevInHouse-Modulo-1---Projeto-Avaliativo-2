import { ToastContainer } from 'react-toastify'
import { RouterConfig } from './routes';
import { BrowserRouter } from 'react-router-dom';

import { TemaProvider, PerfilUsuarioProvider, AutenticaUsuarioProvider } from "./contexts"

import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <TemaProvider>
          <PerfilUsuarioProvider>
            <AutenticaUsuarioProvider>
              <RouterConfig />
              {/* <Router /> */}
            </AutenticaUsuarioProvider>
          </PerfilUsuarioProvider>
        </TemaProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App;

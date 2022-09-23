import { ToastContainer } from 'react-toastify'
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';

import { TemaProvider } from "./contexts"

import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <TemaProvider>
          <Router />
        </TemaProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App;

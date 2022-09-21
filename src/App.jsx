import { ToastContainer } from 'react-toastify'

import { TemaProvider } from "./contexts"
import { PaginaInicial } from "./pages"

import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <>
      <TemaProvider>
        <PaginaInicial />
      </TemaProvider>
      <ToastContainer />
    </>
  )
}

export default App;

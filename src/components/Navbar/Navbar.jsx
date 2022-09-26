import { useTema, useAutenticaUsuario} from "../../contexts"
import { Container, ContentTitle, Title } from "./Navbar.styled"
import { Button, Link } from "../"
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { alteraTema } = useTema()

  const {estaLogado, deslogaUsuario } = useAutenticaUsuario()

  const navigate = useNavigate();

  const acaoEntadaSaida = (event) => {
    if(event.target.innerText === "Sair") {
      deslogaUsuario()
    }
    navigate("/login")
  }


  return (
    <Container>
      <ContentTitle>
        <Title>Connect Lab</Title>
      </ContentTitle>
      <div>
        {estaLogado ? <Link to="/inicial">Inicio</Link> : null}
        {estaLogado ? <Link to="/dispositivos">Dispositivos</Link> : null}
        {estaLogado ? <Link to="/perfil">Perfil</Link> : null}        
        
        <Button onClick={() => alteraTema("escuro")}>Tema 1</Button>
        <Button onClick={() => alteraTema("claro")}>Tema 2</Button>
        <Button onClick={acaoEntadaSaida} >{estaLogado ? "Sair" : "Logar"}</Button>
      </div>

    </Container>
  );
};

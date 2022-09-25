import { useTema } from "../../contexts"
import { Container, ContentTitle, Title } from "./Navbar.styled"
import { Button, Link } from "../"

export const Navbar = () => {
  const { alteraTema } = useTema()

  return (
    <Container>
      <ContentTitle>
        <Title>Connect Lab</Title>
      </ContentTitle>
      <div>
        <Link to="/inicial">Inicio</Link>
        <Link to="/dispositivos">Dispositivos</Link>
        <Link to="/perfil">Perfil</Link>
        <Button onClick={() => alteraTema("escuro")}>Tema 1</Button>
        <Button onClick={() => alteraTema("claro")}>Tema 2</Button>
        <Button onClick={() => { }} >Login</Button>
      </div>

    </Container>
  );
};

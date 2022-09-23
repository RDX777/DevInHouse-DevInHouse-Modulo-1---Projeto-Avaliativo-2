
import { useTema } from "../../contexts";
import { Container, ContentTitle, Title } from "./Navbar.styled";
import { Button } from "../Button";
import { Toggle } from "../Toggle";

export const Navbar = () => {
  const { alteraTema } = useTema();

  const teste = (event) => {
    console.log(event)
  }

  return (
    <Container>
      <ContentTitle>
        <Title>Connect Lab</Title>
      </ContentTitle>
      <div>
        <a href="#tip">Inicio</a>
        <a href="#tip">Dispositivos</a>
        <a href="#tip">perfil</a>
        <div>
          <Toggle onClick={teste}/>
        </div>
        <div>
          <Button onClick={() => alteraTema("escuro")}>Tema 1</Button>
          <Button onClick={() => alteraTema("claro")}>Tema 2</Button>
          <Button onClick={"te"} >Login</Button>
        </div>

      </div>

    </Container>
  );
};

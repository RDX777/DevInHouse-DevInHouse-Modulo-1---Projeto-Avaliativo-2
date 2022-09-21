import { toast } from 'react-toastify';


import { useTema } from "../../contexts";
import { Container, ContentTitle, Title } from "./Navbar.styled";
import { Button } from "../Button";

export const Navbar = () => {
  const { alteraTema } = useTema();

  const notify = () => toast.promise("hello")

  return (
    <Container>
      <ContentTitle>
        <Title>Connect Lab</Title>
      </ContentTitle>
      <div>
        <Button onClick={() => alteraTema("escuro")}>Tema 1</Button>
        <Button onClick={() => alteraTema("claro")}>Tema 2</Button>
        <Button onClick={notify} >Login</Button>
        
      </div>
    </Container>
  );
};

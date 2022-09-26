import { useNavigate } from 'react-router-dom';
import { useState } from "react"

import { BoxStyled, H1Styled, DivPessoaStyled, DivImagemStyled, ImagemStyled, DivNomeStyled, DivEnderecoStyled } from "./PerfilUsuario.styled.jsx"
import { Button } from "../"
import { useAutenticaUsuario, usePerfilUsuario} from "../../contexts"

export const PerfilUsuario = () => {

  const { deslogaUsuario } = useAutenticaUsuario()
  const navigate = useNavigate();
  const { usuarioColetaEdita } = usePerfilUsuario()

  const [ dadosUsuario, ] = useState(usuarioColetaEdita())


  const sair = () => {
    deslogaUsuario(false)
  }

  const editar = () => {
    navigate("/cadastro")
  }

  return (
    <BoxStyled>
      <H1Styled>Perfil de usuario</H1Styled>

      <DivPessoaStyled>
        <DivImagemStyled>
          <ImagemStyled src="https://st.depositphotos.com/1161999/1977/i/950/depositphotos_19776183-stock-photo-dawn-in-a-meadow.jpg" alt="" />
        </DivImagemStyled>
        <DivNomeStyled>
          <h2>{dadosUsuario?.nome}</h2>
          <hr />
          <p>{dadosUsuario?.email}</p>
          <p>{dadosUsuario?.telefone}</p>
        </DivNomeStyled>
      </DivPessoaStyled>

      <DivEnderecoStyled>
        <h2>{dadosUsuario?.logradouro} , {dadosUsuario?.numero} - {dadosUsuario?.cidade}</h2>
        <hr />
        <p>{dadosUsuario?.cep}</p>
        <p>{dadosUsuario.estado}</p>
      </DivEnderecoStyled>

      <Button onClick={editar}>Editar</Button>

      <Button onClick={sair} >Sair</Button>

    </BoxStyled>
  )
}
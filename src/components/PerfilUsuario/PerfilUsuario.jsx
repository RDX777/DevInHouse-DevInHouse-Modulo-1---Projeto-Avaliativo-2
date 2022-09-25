import { BoxStyled, H1Styled, DivPessoaStyled, DivImagemStyled, ImagemStyled, DivNomeStyled, DivEnderecoStyled } from "./PerfilUsuario.styled.jsx"
import { Button, Link } from "../"

export const PerfilUsuario = () => {
  return (
    <BoxStyled>
      <H1Styled>Perfil de usuario</H1Styled>

      <DivPessoaStyled>
        <DivImagemStyled>
          <ImagemStyled src="https://st.depositphotos.com/1161999/1977/i/950/depositphotos_19776183-stock-photo-dawn-in-a-meadow.jpg" alt="" />
        </DivImagemStyled>
        <DivNomeStyled>
          <h2>Nome</h2>
          <hr />
          <p>E-mail</p>
          <p>Telefone</p>
        </DivNomeStyled>
      </DivPessoaStyled>

      <DivEnderecoStyled>
        <h2>Endereço</h2>
        <hr />
        <p>cep</p>
        <p>Endereço</p>
      </DivEnderecoStyled>

      <Button>Editar</Button>

      <Link to="/login">Sair</Link>

    </BoxStyled>
  )
}
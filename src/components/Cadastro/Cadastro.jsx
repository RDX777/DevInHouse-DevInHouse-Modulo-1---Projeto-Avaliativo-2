import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';

import { BoxStyled, Coluna, Linha, Centro, CorErro } from "./Cadastro.styled.jsx"
import { InputStyled } from "../Input/InputStyled.styled.jsx"
import { Button } from "../Button"
import { consultaCep } from "../../services/consultaCep.js"

const validacao = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório!"),
  urlfoto: yup.string().url("O campo deve ser uma URL"),
  email: yup.string().email("O campo deve um e-mail").required("O e-mail é obrigatório!"),
  telefone: yup.string(),
  senha: yup.string().required("Senha é obrigatória").min(8, "Minimo requerido 8 digitos"),
  confirmasenha: yup.string().oneOf([yup.ref('senha'), null], "Senhas não conferem"),
  cep: yup.string().required("O CEP é obrigatório!").min(8, "CEP invalido"),
  logradouro: yup.string().required("O nome da rua é obrigatório!"),
  numero: yup.number().typeError("Somente numeros").required("O numero é obrigatório!").positive(),
  bairro: yup.string().required("O bairro é obrigatório!"),
  cidade: yup.string().required("A cidade é obrigatória!"),
  estado: yup.string().required("O estado é obrigatório!"),
  complemento: yup.string(),
})

const values = (data) => { console.log(data) }


export const Cadastro = () => {

  const [cep, setCep] = useState([])

  // useEffect(() => {


  //   console.log(cep)
  //   .then((response) => {
  //     console.log(response.json())
  //   })
  //   toast.promise(consultaCep, {
  //     pending: "Consultando CEP.",
  //     success: "CEP encontrado",
  //     error: "CEP não encontrado"
  //   })
  // })

  const consultaCepCliente = (event) => {

    if (event.keyCode === 13) {

      if(event.target.value.length !== 8) {
        toast.error("CEP Invalido")
      } else {

        consultaCep(event.target.value).then(({ data }) => {
          setCep(data)
          console.log("cep", data)

        })
        toast.promise(consultaCep, {
          pending: "Consultando CEP.",
          success: "CEP encontrado",
          error: "Erro ao consultar",
        })
      }
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validacao)
  })

  return (
    <BoxStyled>
      <form onSubmit={handleSubmit(values)}>

        <Centro>
          <h1>Cadastrar</h1>
        </Centro>

        <Coluna>

          <Linha>
            <label htmlFor="nome">Nome Completo</label>
            <InputStyled type="text" name="nome" id="nome" autoComplete="off" {...register("nome")} />
            <CorErro>{errors.nome?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="urlfoto">Link da Foto</label>
            <InputStyled type="text" name="urlfoto" id="urlfoto" autoComplete="off" {...register("urlfoto")} />
            <CorErro>{errors.urlfoto?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="email">E-mail</label>
            <InputStyled type="text" name="email" id="email" autoComplete="off" {...register("email")} />
            <CorErro>{errors.email?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="telefone">Telefone</label>
            <InputStyled type="text" name="telefone" id="telefone" autoComplete="off" {...register("telefone")} />
            <CorErro>{errors.telefone?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="senha">Senha</label>
            <InputStyled type="password" name="senha" id="senha" autoComplete="off" {...register("senha")} />
            <CorErro>{errors.senha?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="confirmasenha">Confirma senha</label>
            <InputStyled type="password" name="confirmasenha" id="confirmasenha" autoComplete="off" {...register("confirmasenha")} />
            <CorErro>{errors.confirmasenha?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="cep">CEP</label>
            <InputStyled type="text" name="cep" id="cep" autoComplete="off" onKeyDown={consultaCepCliente} {...register("cep")} />
            <CorErro>{errors.cep?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="logradouro">Logradouro/Endereço</label>
            <InputStyled type="text" name="logradouro" id="logradouro" autoComplete="off" value={cep?.logradouro} {...register("logradouro")} />
            <CorErro>{errors.logradouro?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="numero">Número</label>
            <InputStyled type="text" name="numero" id="numero" autoComplete="off" {...register("numero")} />
            <CorErro>{errors.numero?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="bairro">Bairro</label>
            <InputStyled type="text" name="bairro" id="bairro" autoComplete="off" {...register("bairro")} />
            <CorErro>{errors.bairro?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="cidade">Cidade</label>
            <InputStyled type="text" name="cidade" id="cidade" autoComplete="off" {...register("cidade")} />
            <CorErro>{errors.cidade?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="estado">Estado</label>
            <InputStyled type="text" name="estado" id="estado" autoComplete="off" {...register("estado")} />
            <CorErro>{errors.estado?.message}</CorErro>
          </Linha>

          <Linha>
            <label htmlFor="complemento">Complemento</label>
            <InputStyled type="text" name="complemento" id="complemento" autoComplete="off" {...register("complemento")} />
            <CorErro>{errors.complemento?.message}</CorErro>
          </Linha>

        </Coluna>

        <Centro>
          <Button type="submit" id="logar">Cadastrar</Button>
          <Button type="button">Login</Button>
        </Centro>

      </form>
    </BoxStyled>

  )
}
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Label, Button, InputStyled } from "../"
import { CorErro, BoxStyled } from "./Login.styled"

const validacao = yup.object().shape({
  login: yup.string().email("O login deve ser um e-mail valido").required("O Login é obrigatorio!").max(50, "Campo excedeu o tamanho permitido."),
  senha: yup.string().required("O Senha é obrigatorio!").max(8, "Campo excedeu o tamanho permitido."),
})

const values = (data) => { console.log(data) }

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validacao)
  })

  return (

    <BoxStyled>
      <form onSubmit={handleSubmit(values)}>
        <p>Bem vindo ao sistema!</p>

        <Label htmlFor="login">Login</Label>
        <InputStyled type="text" name="login" id="login" placeholder="Digite seu login" autoComplete="off" {...register("login")} />
        <CorErro>{errors.login?.message}</CorErro>

        <Label htmlFor="senha">Senha</Label>
        <InputStyled type="password" name="senha" id="senha" placeholder="Digite sua senha" autoComplete="off" {...register("senha")} />
        <CorErro>{errors.senha?.message}</CorErro>

        <div>
          <Button type="submit" id="logar">Acessar</Button>
          <Button type="button">Cadastrar</Button>
        </div>
      </form>
    </BoxStyled >

  )
}
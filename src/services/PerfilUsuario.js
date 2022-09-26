export const salvaUsuario = (perfil) => {
  
  localStorage.setItem('perfilUsuario', perfil)
  
}

export const coletaUsuario = () => {
  
  return localStorage.getItem('perfilUsuario')
  
}

export const coletaUsuarioToJson = () => {
  
  const json = coletaUsuario()
  return JSON.parse(json)

  
}

export const coletaUsuarioAutentica = () => {
  
  const json = coletaUsuario()
  const usuario = JSON.parse(json)

  return {
    login: usuario.email,
    senha: usuario.senha,
  }  
}

export const coletaCidade = () => {
  const json = coletaUsuario()
  const usuario = JSON.parse(json)

  return  usuario.cidade
}
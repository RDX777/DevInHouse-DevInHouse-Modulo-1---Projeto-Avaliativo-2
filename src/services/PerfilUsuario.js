export const salvaUsuario = (perfil) => {
  
  localStorage.setItem('perfilUsuario', perfil)
  
}

export const coletaUsuario = () => {
  
  return localStorage.getItem('perfilUsuario')
  
}

export const logaUsuario = (loginUsuario) => {

  console.log(loginUsuario)

}

export const coletaCidade = () => {
  const json = coletaUsuario()
  const usuario = JSON.parse(json)

  return  usuario.cidade
}
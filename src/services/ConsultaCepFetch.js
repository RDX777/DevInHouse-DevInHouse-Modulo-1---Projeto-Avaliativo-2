export const consultaCep = (cepz) => {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  }

  const url = "https://viacep.com.br/ws/"+cepz+"/json/"

  const response = fetch(encodeURI(url), options)
  const  data = response
  return data
}
export const consultaCep = async (cepz) => {
  'use strict'
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  }

  const url = "https://viacep.com.br/ws/"+cepz+"/json/"

  const response = await fetch(encodeURI(url), options)
  const  data = await response
  console.log(url)
  return data
}
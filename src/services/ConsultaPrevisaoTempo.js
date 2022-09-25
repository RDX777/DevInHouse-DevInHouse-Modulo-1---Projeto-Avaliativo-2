export const consultaPrevisaoTempo = (cidade) => {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  }

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + ",br&units=metric&lang=pt_br&appid=69119e3a8a8b3c4d00aea34ddceaa1af"

  const response = fetch(encodeURI(url), options)
  const  data = response
  return data
}
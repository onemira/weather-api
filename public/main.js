let currentWeather = {}

const forecast = () => {
  let location = document.querySelector('.location-term').value
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=7d5fd7008df38afb95ddf8cdd2456700&units=imperial')
    .then(resp => {
      return resp.json()
    })
    .then(weather => {
      // console.log(weather)
      currentWeather = weather
      document.querySelector('.result').textContent = '" ' + currentWeather.name + ' is ' + currentWeather.weather[0].main + '" '
      console.log(currentWeather.weather[0].main)
    })
}

document.querySelector('.search').addEventListener('click', forecast)
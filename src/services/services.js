import axios from 'axios'

const key = "89187b35e4144f62b7b170325232504"

const useFetchData = () => {
  const weatherData = async (func, city = 'London') => {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`)
        func(response)
    } catch(e) {
      console.log(e)
    }
  }

  const forecastFetchData = async (func) => {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=London&days=5`)
        func(response)
    } catch(e) {
      console.log(e)
    }
  }
  return {
    weatherData,
    forecastFetchData
  }
}


export default useFetchData;

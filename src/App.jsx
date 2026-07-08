import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
const [city, setCity] = useState("");
const[weather,setWeather] = useState();
const handleCityChange = (event) => {
  setCity(event.target.value)
}
const fetchWeather = async () => {
  try{
    const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0140f74633e14d3a4a3d3fe27ad02baf&units=metric`
)
  setWeather(response.data);
  }
  catch(error){
  console.log(error)
}
}
const handleClick = () => {
  fetchWeather();
}
  

  return (
    <>
    <div className='container'>
    <input type='text' placeholder='Enter City name' value={city} onChange={handleCityChange}/>
    <button onClick={handleClick}>GET WEATHER</button>
    {weather && (
  <div className='info'>

    <h3>{weather.name}</h3>

    <p>
      TEMP IS {weather.main.temp}°C
    </p>

    <p>
      {weather.weather[0].description}
    </p>

  </div>
)}
    </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'


function App() {

  const keyer = '0b7566e08f791a33c97234ea072b4631'

  const [lati, setLat] = useState();
  const [longi, setLong] = useState();
  const [data, setData] = useState();

  const [place, setPlace] = useState();
  const [temp, setTemp] = useState();
  const [mintemp, setminTemp] = useState();
  const [maxtemp, setmaxTemp] = useState();

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=${keyer}`)

        .then(result => {
          result => result.json()
          setData(result)
          console.log(result);
          console.log(keyer);
          setPlace(result.data.name);
          setTemp(result.data.main.temp);
          setminTemp(result.data.main.temp_min);
          setmaxTemp(result.data.main.temp_max);
        });
    }
    fetchData();
  }, [lati, longi])

  const btnHR = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }






  return (
    <div className='bg-styler min-h-screen w-full bg-black flex   jusitify-center items-center flex-wrap font-mono text-2xl '>

      <div className="h-full w-full flex justify-center items-center flex-wrap gap-4">


        <div className='px-12 h-36 bg-blue-200 rounded-lg flex justify-center items-center'>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>

          <h1>{mintemp}</h1>


        </div>

        <div className='px-12 h-36 bg-white rounded-lg flex justify-center items-center'>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>

          <h1>{temp}</h1>


        </div>

        <div className='px-12 h-36 bg-red-200 rounded-lg flex justify-center items-center'>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>

          <h1>{maxtemp}</h1>


        </div>

        <div className='px-12 h-36 rounded-lg bg-white flex font-mono text-2xl items-center justify-center gap-2'>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation-2"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>

          <h1>{place}</h1>

        </div>
        <button onClick={btnHR}>refresh</button>
      </div>
    </div>
  )
}

export default App

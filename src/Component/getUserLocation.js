
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Clock from 'react-live-clock';
import WeatherInfo from "./WeatherInfo";    

import './App.css';


const  GetUserLocation = () => {
  
const  [latitude, setlatitude] = useState(null);
const [longitude, setlongitude ]  = useState(null);

const [tem, setTemp]  = useState(null);
const [country, setCountry]  = useState(null);
const [city, setCityName]  = useState(null);
const [humidity, sethumidity]  = useState(null);
const [visiblity, setVisiblity]  = useState(null);
const [windSpeed, setWindSpeed]  = useState(null);
const [feelLike, setFeelLike]  = useState(null);
const [maxTemp, setMaxTemp]  = useState(null);
const [weatherName, setWeatherName]  = useState(null);

const [wdata, setwdata] = useState({});
   useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
         
           setlatitude(position.coords.latitude)
           setlongitude(position.coords.longitude);
           getUser(position.coords.latitude,position.coords.longitude);
          })
  }, [])
  // console.log(latitude);
  // console.log(longitude);

  const getUser = async (latitude, longitude) => {
    try {
      const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=c0d573b18729da9019711dcbacf8458d`);
       
      setTemp(Math.round(response.data.main.temp))
      setCountry(response.data.sys.country);
      setCityName(response.data.name);
      setwdata(response.data);
      sethumidity(response.data.main.humidity);
      setVisiblity(response.data.visibility)
      setWindSpeed(response.data.wind.speed)
      setFeelLike(response.data.main.feels_like)
      setMaxTemp(response.data.main.temp_max)
      setWeatherName(response.data.weather[0].main)
    } catch (error) {
      console.error(error);
    }
  }
  // console.log("wdata",wdata);
  // console.log("temp", tem)
  return (

    <React.Fragment>
    <div style={{ height:'100vh'}}> 
    <div className="col-8 d-flex justify-content-center  " style={{ marginTop:"5rem", marginLeft:"3rem", paddingTop:"2rem",paddingBottom:"2rem",borderRadius:"20px", backgroundColor:" rgba(255,255,255,.4)"}}>
      <div className="col-6 app-bg d-flex flex-wrap " style={{borderRadius:"20px"}} >
        <div className="col-12">
          <h2 style={{color:"white"}} className="text-white m-0">{city}</h2>
          <p style={{color:"white"}} className="text-white">{country}</p>
        </div>
        <div className="col-12 mt-auto d-flex">
          <div className="my-auto">
          <h2 className="text-white m-0 ">
          <Clock format={'HH:mm:ss'} ticking={true} />
          </h2>
          <p className="text-white m-0">
           <Clock
          date={''}
          format={'dddd, MMMM DD, YYYY'} /> 
          </p>
          </div>
          <div className="ml-auto">
          <h1 style={{color:"white"}} >{(tem)}°C</h1>
          </div>
        </div>
      </div>
      <WeatherInfo humidity={humidity} visiblity={visiblity} windSpeed={windSpeed} feelsLike={feelLike} maxTemp={maxTemp} weatherName={weatherName} />
    </div>
    </div>
  </React.Fragment>
  )
}


export default GetUserLocation;

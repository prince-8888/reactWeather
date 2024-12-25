import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./searchBox"
import "./searchBox.css"
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 26.05,
        humidity: 94,
        temp: 26.05,
        tempMax: 26.05,
        tempMin: 26.05,
        weather: "light rain"
    })

    let updateInfo=(result) => {
        setWeatherInfo(result)
    }
    return(
        <div className="byPrince">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
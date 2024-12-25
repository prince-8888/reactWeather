import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
import { useScrollTrigger } from '@mui/material';
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({ updateInfo }) {
    let [error, setError] =useState(false);
    let [city, setCity] = useState("");
    const API_KEY = `1031e82180981b48e6b9fba105594774`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

    let getWeatherInfo = async () => {
        try{
        let res = await fetch(`${API_URL}`)
        let jsonRes = await res.json();
        // console.log(jsonRes);
        let result = {
            city: city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,
        };
        console.log(result)
        return result;
    } catch(error){
        throw(error)
    }
    

    }


    let handleChange = (event) => {
        setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(error){
            setError(true)
        }

    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    

                />
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <b><p style={{color:"red"}}>No such place found</p></b>}
            </form>
        </div>
    )
}
import { useState } from 'react'
import SearchBox from './searchBox';
import InfoBox from './infoBox';
import WeatherApp from './WeatherApp';

function App() {
  const [count, setCount] = useState(0)
  let response=() => {
    console.log("Clicked")
  }

  return (
    <>
    <WeatherApp/>
     
        {/* <h1>Material UI</h1>
        <Button onClick={response} variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
        &nbsp; */}
        {/* <Button onClick={response} variant="contained" color='error'>Click me 2!</Button> */}
      
      
    </>
  )
}

export default App

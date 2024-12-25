import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./infoBox.css";

export default function InfoBox({info}) {

    let Rain_URL="https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Cold_URL="https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Hot_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return (
        <div className='infoBox'>
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity >80 ? Rain_URL : info.temp > 15 ? Hot_URL: Cold_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {info.city} &nbsp;{info.humidity >80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/>: <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>
                            <p>Temperature = <b>{info.temp}&deg;C</b></p>
                            <p>Humidity = <b>{info.humidity}&deg;C</b></p>
                            <p>Weather = <b>{info.weather}</b></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. eius enim.</p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}
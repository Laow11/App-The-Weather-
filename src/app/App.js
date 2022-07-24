import React, { Component } from 'react'; // Importame la clase component desde React
import WeatherInfo from '../Components/WeatherInfo';
import WeatherForm from '../Components/WeatherForm';
import { WEATHER_KEY } from './Keys';


class App extends Component{
    state = {

        temperature:  '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null

    }

    getWeather= async e => {
        e.preventDefault();// Permite que al darle "Get Weather" no se reinicie la pagina
        
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value; 

        if(cityValue && countryValue){
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
           
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            }); 
        } else {
            this.setState({error: 'Por favor ingrese una ciudad y el pais correspondiente, gracias!'})
        }
        
        
    }

    render(){
        return(
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
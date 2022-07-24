import React from "react";

const WeatherInfo = props =>{
    console.log(props)
    return(
<div>
        
        {
            props.error && 
            <div className="alert alert-primary">
            <p>{props.error}</p>
            </div>
        }
        {
            props.temperature ?
          <div className="card card-body">
            
          <p> 
              Location: {props.city}, {props.country}
          </p>
          <p>
              Temperature: {props.temperature}🌡️ {props.description}
          </p>
          <p>
              Humidity: {props.humidity} %
          </p>
          <p>
              Wind Speed: {props.wind_speed} 🌬️
          </p>
        </div>  
        :
            <div className="card card-body">
                <p>No tengo informacion que mostrarte!</p>
            </div>
        }   
        <div>
            <h2>App creada por Lauta! 🧛</h2>
        </div>
</div>
             
    )
}

export default WeatherInfo;
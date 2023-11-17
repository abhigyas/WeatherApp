import React from "react";

const WeatherInfo = ({weatherData}) => {

    const {icon,temperature} = weatherData;
    return (

        <div className='weatherCard'>
            <img src={`https://openweathermap.org/img/w/${icon}`} alt="Weather Icon" />
            <div>
                <h3>Temperature</h3>
                <p>{temperature}</p>
            </div>
        </div>
    );

};
export default WeatherInfo;
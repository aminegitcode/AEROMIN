import React from 'react';
import WeekCard from './WeekCard';
import { GetWeatherStyle } from "../../../../utils/GetWeatherStyle";

function WeekMain({ weatherData }) {

  const weekData = weatherData?.daily?.slice(0, 7).map(day => {
    const weatherStyle = GetWeatherStyle(
      day.weather[0].main,
      true, 
      day.weather[0].id
    );

    return {
      imgSrc: weatherStyle.icon,
      day: new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" }),
      weatherDesc: day.weather[0].description,
      wind: day.wind_speed,
      humidity: day.humidity,
      temp: Math.round(day.temp.day),
    };
  });

  return (
    <ul className='flex flex-1 flex-col gap-8 bottom-5 xl:mx-10 mx-5 list-none mb-5'>
      {weekData?.map((item, index) => (
        <li key={index} className='flex-1'>
          <WeekCard
            imgSrc={item.imgSrc}
            day={item.day}
            weatherDesc={item.weatherDesc}
            wind={item.wind}
            humidity={item.humidity}
            temp={item.temp}
          />
        </li>
      ))}
    </ul>
  );
}

export default WeekMain;

import React from "react";
import HighlightCard from "./HighlightCard";
import wind from "../../../assets/weather/wind.png";
import pressure from "../../../assets/weather/pressure1.png";
import humidity from "../../../assets/weather/humidity1.png";
import cloudy from "../../../assets/weather/cloud.png";
import rain from "../../../assets/weather/rain1.png";
import visibility from "../../../assets/weather/visibility.png";

import uvindex from "../../../assets/weather/uvindex.png";
import dewpoint from "../../../assets/weather/dewpoint.png";

import SunriseSunset from "./SunriseSunset";
function Highlights( {weatherData,getSunTimes}) {
  console.log(weatherData)   
  if(!weatherData){
    return;
  }
  const highlights = [
    { title: "Wind Status", icon: wind, value: `${weatherData.current.wind_speed}`, unit: "m/s" },
    { title: "Pressure", icon: pressure, value: `${weatherData.current.pressure}`, unit: "hPa" },
    { title: "Humidity", icon: humidity, value: `${weatherData.current.humidity}`, unit: "%" },
    { title: "Rain", icon: rain, value: `${weatherData.rain?`${weatherData.rain["1h"]}`:`0`}`, unit: "mm/h" },
    { title: "Cloud cover", icon: cloudy, value: `${weatherData.current.clouds}`, unit: "%" },
    { title: "Visibility", icon: visibility, value: `${weatherData.current.visibility}`, unit: "m" },
    { title: "Dew Point", icon: dewpoint, value: `${weatherData.current.dew_point}`, unit: "°C" },
    { title: "UV Index", icon: uvindex, value: `${weatherData.current.uvi}`, unit: "UV" },
  
  ];
  return (
    <div className="flex  flex-col flex-1 items-center h-full ">
      

      <div className="flex  xl:items-center overflow-hidden flex-col xl:gap-4 flex-1 w-full  ">
        <ul className="grid grid-cols-2  md:grid-cols-4 gap-3 flex-1 mb-5 xl:mb-0 w-full">
          {highlights.map((highlight, index) => (
            <li 
              key={index}
              className={`hover:scale-105 transition-all w-full h-full ${
                index === highlights.length - 1 && highlights.length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <HighlightCard
                title={highlight.title}
                icon={highlight.icon}
                value={highlight.value}
                unit={highlight.unit}
              />
            </li>
          ))}
        </ul>

        <div
          className="bg-white flex-1 rounded-2xl max-h-65 xl:w-full  border-gray-200/50 shadow-md mb-3
         transition-all border "
        >
          <SunriseSunset weatherData={weatherData} getSunTimes={getSunTimes}/>
          
        </div>
      
      </div>
    </div>
  );
}

export default Highlights;

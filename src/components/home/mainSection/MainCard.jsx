import React, { use, useEffect, useState } from "react";
import { GetWeatherStyle } from "../../../utils/GetWeatherStyle";
import heavy_rain from "../../../assets/weather/drizzle.png";


function MainCard({ weatherData,getCurrentTime, checkIsDay }) {
  const [isDay, setIsDay] = useState(true);
  const [localTime, setLocalTime] = useState("");
  const [dayName, setDayName] = useState("");
 

   useEffect(() => {
  if (!weatherData) return;

  const isDayTime=checkIsDay(weatherData);
 
  setIsDay(isDayTime);
}, []);

  useEffect(() => {
  if (!weatherData) return;

  const { timeString, day } = getCurrentTime(weatherData); 
  const isDayTime=checkIsDay(weatherData);
  setLocalTime(timeString);
  setDayName(day);
  setIsDay(isDayTime);
}, [weatherData]);

  if (!weatherData) {
    return;
  }

  const weatherStyle = GetWeatherStyle(
    weatherData.current.weather[0].main,
    isDay,
    weatherData.current.weather[0].id
  );

  return (
    <div
      className={` ${
        weatherStyle.bgClass
      }  mb-4  w-full    sm:h-60 h-62 relative shadow-lg shadow-gray-200/80 rounded-2xl ${
        !isDay ? "text-gray-50" : ""
      }`}
    >
      <div className="w-full h-13  bg-gray-400/10 rounded-t-2xl  flex items-center justify-between px-5 font-semibold text-md">
        <span className="">{dayName} </span>
        <span className="font-[Tektur]">{localTime}</span>
      </div>

      <div className="flex items-center mx-5 justify-between my-2">
        <div className="flex  items-start gap-2 xl:gap-5">
          <div className="flex flex-col my-3 ">
            <div className="flex mt-2">
              <span className="font-medium  font-[Tektur]  sm:text-8xl text-7xl">
                {Math.floor(weatherData.current.temp)}
              </span>
              <span className="font-semibold text-2xl"> &deg;C</span>
            </div>
          </div>

          <div>
            <span
              className={`  text-md font-[Tektur]   absolute bottom-3 left-3 `}
            >
              {weatherData.daily[0].summary}
            </span>
          </div>

          <div className={`flex flex-col  gap-1 text-xs   ${isDay ? "" : ""}`}>
            <div
              className={` mt-4 font-semibold text-xl    ${
                isDay ? "text-gray-400" : "text-gray-300"
              }`}
            >
              {weatherData.current.weather[0].main}
            </div>
            <div className=" ">
              <span className={`  `}>Feels like:</span>
              <span>
                &nbsp;{Math.floor(weatherData.current.feels_like)}&deg;
              </span>
            </div>

            <div className=" ">
              <span className={` `}>Max:</span>
              <span>
                &nbsp;{Math.floor(weatherData.daily[0].temp.max)}&deg;
              </span>
            </div>

            <div>
              <span className={` `}>Min:</span>
              <span>
                &nbsp;{Math.floor(weatherData.daily[0].temp.min)}&deg;
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={weatherStyle.icon}
            alt="weather"
            className={`w-24 sm:w-30 ml-3 pt-2 ${weatherStyle.iconClass}`}
          />
        </div>
      </div>
    </div>
  );
}

export default MainCard;

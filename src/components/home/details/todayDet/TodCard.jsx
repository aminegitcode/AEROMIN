import React from "react";
import { GetWeatherStyle } from "../../../../utils/GetWeatherStyle";
function TodCard({ imgSrc, hour, weatherDesc, wind, humidity,temp, }) {

  return (
    <div className="flex items-center   h-18">
      <div className="flex items-center relative h-full flex-1  ">
        <img src={imgSrc} className="sm:w-13 w-11 mr-2" alt={weatherDesc} />
        <div className="flex flex-col  font-medium ">
          <span className="text-gray-400  ">{hour}</span>
          <span className=" sm:text-lg text-md ">{weatherDesc}</span>
        </div>
      </div>
      <div className="w-[2px] h-8/10 sm:ml-5 mx-2 bg-gray-300"></div>
      <div className="flex justify-around items-center flex-1">
        <div className="flex items-start">
          <span className="text-gray-800 font-semibold text-3xl sm:text-4xl">{temp}</span>
          <span>&deg;c</span>
        </div>
        <div
          className="flex gap-4"
        >
          <div className="text-gray-400 text-sm flex flex-col">
            <span>Wind: {wind} m/s</span>
            <span>Humidity: {humidity}%</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default TodCard;

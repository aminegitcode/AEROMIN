import React, { use, useEffect, useState } from "react";
import { Sunrise, Sunset } from "lucide-react";

function SunriseSunset({weatherData,getSunTimes}) {
  const [sunriseTime,setSunriseTime]=useState();
  const [sunsetTime,setSunsetTime]=useState();


useEffect(()=>{
  if (!weatherData || !weatherData.current) return;
  const { sunrise, sunset } = getSunTimes(weatherData);
  setSunriseTime(sunrise);
  setSunsetTime(sunset);


},[weatherData])
  return (
    <div className="flex  items-center justify-around  sm:px-8  py-4 h-full  ">
      {/* Sunrise */}
      <div className="flex flex-col items-center">
        <Sunrise className="text-yellow-400" strokeWidth={2} size={55} />
        <h2 className="text-xl font-bold text-yellow-800 mt-2 mb-3">Sunrise</h2>
        <p className="text-2xl sm:text-3xl sm:w-35 w-27 hover:scale-102 font-bold cursor-pointer bg-gray-50 rounded-4xl py-1 sm:py-2 flex justify-center shadow-md border border-gray-100 text-gray-800">
          {sunriseTime}
        </p>
      </div>

      <span className="w-[2px] h-9/10  bg-gray-300  rounded-full"></span>

      {/* Sunset */}
      <div className="flex flex-col items-center">
        <Sunset className="text-blue-400" strokeWidth={2} size={55} />
        <h2 className="text-xl font-bold text-blue-800 mt-2 mb-3">Sunset</h2>
        <p className="text-2xl sm:text-3xl hover:scale-102 sm:w-35 w-27 font-bold cursor-pointer  bg-gray-50 rounded-4xl py-1 sm:py-2 flex justify-center shadow-md border border-gray-100 text-gray-800">
          {sunsetTime}
        </p>
      </div>
    </div>
  );
}

export default SunriseSunset;

import React, { use, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { OneCallApi } from "../api/OneCallApi";
import ConverToLocalTime from "../utils/ConvertToLocalTime";

import MainComp from "../components/home/mainSection/MainComp";
import Highlights from "../components/home/highlightsSection/Highlights";
import MainDet from "../components/home/details/MainDet";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [weatherData, setweatherData] = useState(null);
  const { cityCoord, setCityCoord } = useOutletContext();
  
  //api call
  useEffect(() => {
    const fetchweatherData = async () => {
      try {
        const weatherData = await OneCallApi({
          lat: cityCoord.lat,
          lon: cityCoord.lon,
        });
        setweatherData(weatherData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchweatherData();
  }, [cityCoord.lat, cityCoord.lon]);

  // set a timeout for the animation
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const data = [
    { title: "Sunday", desc: "February 19, 2023" },
    { title: "Monday", desc: "February 20, 2023" },
    { title: "Tuesday", desc: "February 21, 2023" },
    { title: "Wednesday", desc: "February 22, 2023" },
    { title: "Thursday", desc: "February 23, 2023" },
    { title: "Friday", desc: "February 24, 2023" },
    { title: "Saturday", desc: "February 25, 2023" },
  ];

  // get sunrise and sunset time
const getSunTimes = (data) => {
  if (!data || !data.current) return { sunrise: null, sunset: null };

  const sunrise = ConverToLocalTime(data.current.sunrise, data.timezone_offset);
  const sunset = ConverToLocalTime(data.current.sunset, data.timezone_offset);

  return { sunrise, sunset };
};


// get the current time
const getCurrentTime = (weatherData) => {
  if (!weatherData) return { timeString: "", day: "" };

  const timeString = ConverToLocalTime(
    weatherData.current.dt,
    weatherData.timezone_offset
  );

  const cityTime = new Date(
    (weatherData.current.dt + weatherData.timezone_offset) * 1000
  );
  const day = cityTime.toLocaleDateString("fr-FR", { weekday: "long" });

  return { timeString, day };
};
// check if it's day or night
const checkIsDay = (data) => {
    if (!data ) return true;
    const { sunrise, sunset } = getSunTimes(data);
    const now=getCurrentTime(data);
    
    return now >= sunrise && now < sunset;
  };

  return (
    <div
      className={`h-full flex flex-col items-stretch w-full px-3 xl:pr-5 xl:max-w-[1920px] 2xl:mx-auto 
      transition-all duration-700 ease-out 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-3 xl:pb-3">
        <div
          className={`flex-1 flex flex-col w-full sm:px-4 transition-all duration-500 
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <MainComp weatherData={weatherData} getCurrentTime={getCurrentTime} checkIsDay={checkIsDay} />
          <div className="flex-1 w-full h-full">
            <Highlights weatherData={weatherData} getSunTimes={getSunTimes} />
          </div>
        </div>

        <div
          className={`w-full xl:w-3/8 h-full flex flex-col transition-all duration-500 
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <MainDet weatherData={weatherData} getSunTimes={getSunTimes} />
        </div>
      </div>
    </div>
  );
}

export default Home;

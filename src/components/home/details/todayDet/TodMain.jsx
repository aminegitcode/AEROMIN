import React, { useEffect } from "react";
import TodCard from "./TodCard";
import { GetWeatherStyle } from "../../../../utils/GetWeatherStyle";
import ConvertToLocalTime from "../../../../utils/ConvertToLocalTime";

function TodMain({ weatherData, getSunTimes }) {
  const checkIsDay = (data, timestamp, timezoneOffset) => {
    if (!data) return true;

    const { sunrise, sunset } = getSunTimes(data); // sunrise/sunset in UTC (seconds)
    const localTime = ConvertToLocalTime(timestamp, timezoneOffset); // Convert the hourly timestamp to local time (in seconds)

    return localTime >= sunrise && localTime < sunset;
  };

  // get the format xx:00
  const roundToHour = (timestamp, timezoneOffset) => {
    const localTime = new Date((timestamp + timezoneOffset) * 1000);
    localTime.setMinutes(0, 0, 0);
    return localTime.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const todayData = weatherData?.hourly
    ?.filter((_, index) => index % 3 === 0) // take the data each 3 hours
    .slice(0, 7) // limit on 7 elements
    .map((hourly) => {
      const isDay = checkIsDay(
        weatherData,
        hourly.dt,
        weatherData.timezone_offset
      );

      const weatherStyle = GetWeatherStyle(
        hourly.weather[0].main,
        isDay,
        hourly.weather[0].id
      );

      return {
        imgSrc: weatherStyle.icon,
        hour: roundToHour(hourly.dt, weatherData.timezone_offset), // round to hour
        weatherDesc: hourly.weather[0].description,
        wind: hourly.wind_speed,
        humidity: hourly.humidity,
        temp: Math.round(hourly.temp),
      };
    });

  return (
    <ul className="flex flex-1 flex-col gap-8 bottom-5 xl:mx-10 mx-5 list-none mb-5">
      {todayData?.map((item, index) => (
        <li key={index} className="flex-1">
          <TodCard
            imgSrc={item.imgSrc}
            hour={item.hour}
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

export default TodMain;
